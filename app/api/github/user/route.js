// export const dynamic = "force-dynamic"

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get("username") || "ajtruex"

    const response = await fetch(`https://api.github.com/users/${username}`, {
      cache: "no-cache",
      headers: {
        Accept: "application/vnd.github.v3+json",
        // Add GitHub token if you have one to increase rate limit
        // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
      },
      // next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`)
    }

    const userData = await response.json()

    const formattedUser = {
      login: userData.login,
      name: userData.name,
      avatar_url: userData.avatar_url,
      html_url: userData.html_url,
      bio: userData.bio,
      public_repos: userData.public_repos,
      followers: userData.followers,
      following: userData.following,
      created_at: userData.created_at,
      updated_at: userData.updated_at,
    }

    return new Response(JSON.stringify(formattedUser), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch user data",
        message: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-store, max-age=0",
        },
      }
    )
  }
}
