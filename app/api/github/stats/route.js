// export const dynamic = "force-dynamic"
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get("username") || "ajtruex"

    // Fetch user, events, and repos in parallel
    const [userResponse, eventsResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        cache: "no-cache",
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add GitHub token if you have one to increase rate limit
          // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
      }),
      fetch(`https://api.github.com/users/${username}/events/public`, {
        cache: "no-cache",
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
      }),
      fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
        cache: "no-cache",
        headers: {
          Accept: "application/vnd.github.v3+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
      }),
    ])

    if (!userResponse.ok || !eventsResponse.ok || !reposResponse.ok) {
      throw new Error("Failed to fetch GitHub data")
    }

    // Fetch starred repositories in parallel
    const [
      starsResponse1,
      starsResponse2,
      starsResponse3,
      starsResponse4,
      starsResponse5,
    ] = await Promise.all([
      fetch(
        `https://api.github.com/users/${username}/starred?per_page=100&page=1`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      ),
      fetch(
        `https://api.github.com/users/${username}/starred?per_page=100&page=2`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      ),
      fetch(
        `https://api.github.com/users/${username}/starred?per_page=100&page=3`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      ),
      fetch(
        `https://api.github.com/users/${username}/starred?per_page=100&page=4`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      ),
      fetch(
        `https://api.github.com/users/${username}/starred?per_page=100&page=5`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
            ...(process.env.GITHUB_TOKEN && {
              Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            }),
          },
        }
      ),
    ])

    const stars1 = await starsResponse1.json()
    const stars2 = await starsResponse2.json()
    const stars3 = await starsResponse3.json()
    const stars4 = await starsResponse4.json()
    const stars5 = await starsResponse5.json()

    const allStars = [...stars1, ...stars2, ...stars3, ...stars4, ...stars5]

    const formattedStars = allStars.map((star) => ({
      id: star.id,
      name: star.name,
      full_name: star.full_name,
      description: star.description,
      html_url: star.html_url,
    }))

    const [userData, events, repos] = await Promise.all([
      userResponse.json(),
      eventsResponse.json(),
      reposResponse.json(),
    ])

    // Calculate various statistics
    const stats = {
      // User stats
      followers: userData.followers,
      following: userData.following,
      public_repos: userData.public_repos,

      // Repository stats
      total_stars: formattedStars.length,
      total_forks: repos.reduce((acc, repo) => acc + repo.forks_count, 0),
      languages: repos.reduce((acc, repo) => {
        if (repo.language) {
          acc[repo.language] = (acc[repo.language] || 0) + 1
        }
        return acc
      }, {}),

      // Event stats
      recent_contributions: events.length,
      contribution_breakdown: events.reduce((acc, event) => {
        acc[event.type] = (acc[event.type] || 0) + 1
        return acc
      }, {}),

      // Additional calculations
      fork_count: repos.filter((repo) => repo.fork).length,
      original_repos: repos.filter((repo) => !repo.fork).length,
    }

    return new Response(JSON.stringify(stats), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch GitHub statistics",
        message: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
