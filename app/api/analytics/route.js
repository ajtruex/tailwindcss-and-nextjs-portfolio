const url =
  "https://api.umami.is/v1/websites/c1ecb30b-bd10-49c9-8eae-34471d9e3830/stats?startAt=1688190600000&endAt=1730094590464"
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "x-umami-api-key": `${process.env.UMAMI_API_KEY}`,
  },
}

export async function GET(request) {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.pageviews.value)

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "max-age=60, s-maxage=60, stale-while-revalidate=600",
      },
    })
  } catch (error) {
    console.error(error)

    return new Response(
      JSON.stringify({
        error: "Failed to fetch data",
        message: error.message,
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    )
  }
}
