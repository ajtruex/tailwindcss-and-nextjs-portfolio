import { getPlaycount } from "@/lib/spotify"

// export default async function handler(req) {
//   const resp = await getPlaycount()
//   console.log(resp)
//   return new Response(JSON.stringify(resp), {
//     status: 200,
//     headers: {
//       "Content-Type": "application/json",
//       "Cache-Control": "max-age=60, s-maxage=60, stale-while-revalidate=600",
//     },
//   })
// }

const url =
  "http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=ajtruex&api_key=22b72a9335e28b31e18527b6122ce723&format=json"
const options = { method: "GET" }
export async function GET(request) {
  try {
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(Number(data.user.playcount).toLocaleString())
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
