import { getPlaycount } from "@/lib/spotify"
export const dynamic = "force-dynamic"
// export async function GET(request) {
//   const resp = await getPlaycount()

//   if (resp.status !== 200) {
//     return new Response(JSON.stringify(await resp.json()), {
//       status: resp.status,
//     })
//   }
//   const data = await response.json()

// const url = `http://ws.audioscrobbler.com/2.0/?method=user.getinfo&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json`
// const options = { method: "GET" }
export async function GET(request) {
  try {
    const response = await getPlaycount()
    // const response = await fetch(url, options)
    const data = await response.json()
    console.log(Number(data.user.playcount).toLocaleString())
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store, max-age=0",
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
