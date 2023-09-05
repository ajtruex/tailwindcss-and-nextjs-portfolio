async function getAccessToken() {
  const response = await fetch(
    "https://umami.andrewtruex.tech/api/auth/login",
    {
      method: "POST",
      body: new URLSearchParams({
        username: process.env.UMAMI_USERNAME as string,
        password: process.env.UMAMI_PASSWORD as string,
      }),
    }
  )

  return response.json()
}

export async function getAnalytics() {
  const resp = await getAccessToken()

  return fetch(
    `https://umami.andrewtruex.tech/api/websites/fa4e4462-c19f-4eba-ab1a-bfd113bde029/stats?startAt=1688184000000&endAt=${Date.now()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${resp.token}`,
      },
    }
  )
}
