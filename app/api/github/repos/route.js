export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get("username") || "ajtruex"
    const page = parseInt(searchParams.get("page")) || 1
    const per_page = parseInt(searchParams.get("per_page")) || 100

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&page=${page}&per_page=${per_page}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add GitHub token if you have one to increase rate limit
          // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    const response2 = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&page=${
        page + 1
      }&per_page=${per_page}`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          // Add GitHub token if you have one to increase rate limit
          // 'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`)
    }

    if (!response2.ok) {
      throw new Error(`GitHub API responded with status ${response2.status}`)
    }

    const repos1 = await response.json()
    const repos2 = await response2.json()
    const repos = [...repos1, ...repos2]

    const formattedRepos = repos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      full_name: repo.full_name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      created_at: repo.created_at,
      topics: repo.topics,
      is_fork: repo.fork,
      visibility: repo.visibility,
    }))

    return new Response(JSON.stringify(formattedRepos), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "max-age=3600, s-maxage=3600, stale-while-revalidate=7200",
      },
    })
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Failed to fetch repositories",
        message: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
