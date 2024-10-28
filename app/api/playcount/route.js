import { getPlaycount } from "@/lib/spotify"

const url = `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json`
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
