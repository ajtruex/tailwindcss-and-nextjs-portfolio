// const url =
//   "https://api.umami.is/v1/websites/c1ecb30b-bd10-49c9-8eae-34471d9e3830/stats?startAt=1688190600000&endAt=1730094590464"
// const options = {
//   method: "GET",
//   headers: {
//     "x-umami-api-key": "Y7qVJSCzTLBanPALYTb3r0OLxLLZQ411",
//     Accept: "application/json",
//   },
// }
// export async function GET() {
//   let data = await fetch(
//     "https://api.umami.is/v1/websites/c1ecb30b-bd10-49c9-8eae-34471d9e3830/stats?startAt=1688190600000&endAt=1730094590464"
//   )
//   try {
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }
// }
// const url =
//   "https://api.umami.is/v1/websites/c1ecb30b-bd10-49c9-8eae-34471d9e3830/stats?startAt=1688190600000&endAt=1730094590464"
// const options = {
//   method: "GET",
//   headers: {
//     Accept: "application/json",
//     "x-umami-api-key": "Y7qVJSCzTLBanPALYTb3r0OLxLLZQ411",
//   },
// }

// export async function GET() {
//   try {
//     const response = await fetch(url, options)
//     const data = await response.json()
//     console.log(data)
//   } catch (error) {
//     console.error(error)
//   }

//   return new Response(JSON.stringify(data), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//       "Cache-Control": "max-age=60, s-maxage=60, stale-while-revalidate=600",
//     },
//   })
// }
const url =
  "https://api.umami.is/v1/websites/c1ecb30b-bd10-49c9-8eae-34471d9e3830/stats?startAt=1688190600000&endAt=1730094590464"
const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    "x-umami-api-key": "Y7qVJSCzTLBanPALYTb3r0OLxLLZQ411",
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
