// app/api/github/route.js
// export const dynamic = "force-dynamic"
export async function GET(req) {
  try {
    const response = await fetch(
      "https://api.github.com/users/ajtruex/events",
      {
        cache: "no-cache",
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add GitHub token if you have one to increase rate limit
          // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
        // next: { revalidate: 60 }, // Cache for 60 seconds
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`)
    }

    const data = await response.json()

    // Process and format the data
    const formattedData = data.map((event) => ({
      id: event.id,
      type: event.type,
      repo: event.repo.name,
      created_at: event.created_at,
      actor: event.actor.login,
      // Add additional fields based on event type
      payload: event.payload,
    }))

    return new Response(JSON.stringify(formattedData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
      },
    })
  } catch (error) {
    console.error("GitHub API Error:", error)
    return new Response(
      JSON.stringify({
        error: "Failed to fetch GitHub data",
        message: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}

// Optional: Add additional endpoints for specific data
export async function fetchUserData(username) {
  try {
    const response = await fetch(`https://api.github.com/users/ajtruex`)
    if (!response.ok) throw new Error("Failed to fetch user data")
    return await response.json()
  } catch (error) {
    console.error("Error fetching user data:", error)
    throw error
  }
}

export async function fetchUserRepos(username) {
  try {
    const response = await fetch(
      `https://api.github.com/users/ajtruex/repos?sort=updated&per_page=100`
    )
    if (!response.ok) throw new Error("Failed to fetch repositories")
    return await response.json()
  } catch (error) {
    console.error("Error fetching repositories:", error)
    throw error
  }
}

export async function fetchUserContributions(username) {
  try {
    // Note: This is a simplified version. GitHub's contribution data
    // requires GraphQL API for complete data
    const response = await fetch(
      `https://api.github.com/users/ajtruex/events?per_page=100`
    )
    if (!response.ok) throw new Error("Failed to fetch contributions")
    return await response.json()
  } catch (error) {
    console.error("Error fetching contributions:", error)
    throw error
  }
}
