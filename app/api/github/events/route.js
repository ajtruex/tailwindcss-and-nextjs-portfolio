export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get("username") || "ajtruex"

    const response = await fetch(
      `https://api.github.com/users/${username}/events/public`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          // Add GitHub token if you have one to increase rate limit
          // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
        next: { revalidate: 60 },
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`)
    }

    const events = await response.json()

    const formattedEvents = events.map((event) => ({
      id: event.id,
      type: event.type,
      repo: event.repo.name,
      created_at: event.created_at,
      actor: event.actor.login,
      payload: {
        ...event.payload,
        commits: event.payload?.commits?.map((commit) => ({
          message: commit.message,
          sha: commit.sha,
        })),
      },
    }))

    // console.log(formattedEvents)

    return new Response(JSON.stringify(formattedEvents), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "max-age=60, s-maxage=60, stale-while-revalidate=600",
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch events",
        message: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
