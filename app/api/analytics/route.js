// const startAt = 1688190600000 // Example start time in milliseconds
// const endAt = Date.now()

export const dynamic = "force-dynamic"

export async function GET(request) {
  const res = await fetch(
    "https://us.posthog.com/api/projects/61450/insights/2266025",
    {
      cache: "no-cache",

      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${process.env.POSTHOG_API_KEY}`,
      },
    }
  )
  const data = await res.json()
  console.log(data.result[0].aggregated_value)

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, max-age=0",
    },
  })
}

// const url = `https://api.umami.is/v1/websites/c1ecb30b-bd10-49c9-8eae-34471d9e3830/stats?startAt=${startAt}&endAt=${endAt}`
// const options = {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//     "x-umami-api-key": process.env.UMAMI_API_KEY,
//   },
// }

// export async function GET(request) {
//   try {
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(data.pageviews.value)

//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: {
//         "Content-Type": "application/json",
//         "Cache-Control": "no-store, max-age=0",
//       },
//     })
//   } catch (error) {
//     console.error(error)

//     return new Response(
//       JSON.stringify({
//         error: "Failed to fetch data",
//         message: error.message,
//       }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     )
//   }
// }
