import { getNpOrRpSong } from "@/lib/spotify"

export const dynamic = "force-dynamic"

export async function GET(request: Request) {
  const resp = await getNpOrRpSong()

  if (resp.status !== 200) {
    return new Response(JSON.stringify(await resp.json()), {
      status: resp.status,
    })
  }

  const response = await resp.json()

  const track = response.recenttracks.track[0]

  const nowPlaying = {
    isPlaying: track["@attr"]?.nowplaying || false,
    name: track.name,
    artist: track.artist["#text"],
    url: track.url,
    image: track.image[3]["#text"].replace("/300x300", ""),
  }

  return new Response(JSON.stringify(nowPlaying), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store, max-age=0",
    },
  })
}
