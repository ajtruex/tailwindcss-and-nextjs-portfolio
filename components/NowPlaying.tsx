"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { SiSpotify } from "react-icons/si"
import NoisyNet from "@/public/noisy-net.png"

// async function getNpOrRpSong() {
//   const res = await fetch(
//     `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=2`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       cache: "no-store",
//     }
//   )
//   return res.json()
// }

export default function NowPlaying() {
  const [isLoading, setIsLoading] = useState(true)

  const [data, setData] = useState({
    isPlaying: false,
    name: "",
    artist: "",
    url: "",
    image: "",
  })
  // const data = await getNpOrRpSong()
  // const song = data.recenttracks.track[0]
  // const isPlaying = song["@attr"]?.nowplaying || false
  // const songName = song.name
  // const artist = song.artist["#text"]
  // const url = song.url
  // const image = song.image[3]["#text"]
  // const string = new Response(
  //   JSON.stringify({
  //     isPlaying,
  //     songName,
  //     artist,
  //     url,
  //     image,
  //   }),
  //   {
  //     status: 200,
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )
  useEffect(() => {
    const fetchNowPlaying = async () => {
      const res = await fetch("/api/spotify/now-playing", {
        cache: "no-store",
        headers: { "Cache-Control": "no-cache" },
      })

      const data = await res.json()
      setData(data)
      setIsLoading(false)
    }

    fetchNowPlaying()
    const interval = setInterval(fetchNowPlaying, 15000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col">
      <div
        className="flex-row dark:from-neutral-800 dark:to-zinc-800  from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex justify-between gap-2  bg-contain bg-repeat"
        style={{ backgroundImage: `url(${data.image})` }}
      >
        <div className="flex flex-col justify-between">
          <h2 className="flex ml-0 mx-auto px-2 rounded-xl text-zinc-200 font-black md:text-xl text-base bg-zinc-800/30 backdrop-blur shadow-lg shadow-black">
            {data.isPlaying ? (
              <SiSpotify className="text-green-600 dark:text-green-400 md:text-xl text-base mr-2 mt-1" />
            ) : (
              <SiSpotify className="text-zinc-600 dark:text-zinc-400 md:text-xl text-base mr-2 mt-1" />
            )}

            {data.isPlaying ? "Now Playing" : "Last Played"}
          </h2>

          <div className="flex w-full">
            <div className="text-base backdrop-blur bg-zinc-800/40 rounded-xl text-zinc-200  shadow-lg shadow-black">
              <Link
                href={data.url}
                target="_blank"
                className="hover:bg-zinc-900/80 rounded-lg p-2 max-sm:pr-1 hover:shadow-lg cursor-pointer duration-200 break-after-all drop-shadow-lg"
              >
                {data.name}
              </Link>
              by
              <Link
                href={data.url.substring(
                  0,
                  data.url.split("/").slice(0, 5).join("/").length + 1
                )}
                target="_blank"
                className="hover:bg-zinc-900/80 rounded-lg p-2 max-sm:pl-1 hover:shadow-lg cursor-pointer duration-200 break-before-auto"
              >
                {data.artist}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-16 w-16 lg:h-20 lg:w-20 md:w-20 md:h-20 shadow-xl shadow-black	rounded-md">
          <Image
            src={data.image}
            alt="album art"
            width={80}
            height={80}
            quality={100}
            className="rounded-lg"
            placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAQAAAAkGDomAAAATElEQVR42u3OMQEAAAwCoNm/9Ep4eEACcuMiKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgo2PQocABR/yKl4wAAAABJRU5ErkJggg=="
          />
        </div>
      </div>

      <div className="isolate mx-auto flex relative h-auto w-fit items-center justify-center overflow-hidden rounded-xl border-2 border-[#00ffcc] bg-gradient-to-br from-[rgba(255,175,189,0.8)] to-[rgba(100,216,255,0.8)] p-4 bg-blend-screen shadow-[0_0_20px_#00ffcc,_inset_0_0_10px_rgba(255,255,255,0.05)] transition-all duration-500 hover:scale-110 hover:shadow-[0_0_35px_#00ffcc,_inset_0_0_15px_rgba(255,255,255,0.1)]">
        {/* <!-- Noisy Overlay --> */}
        <div className="pointer-events-none absolute inset-0 mx-auto h-auto w-auto items-center justify-center rounded-xl bg-[url('https://www.transparenttextures.com/patterns/noisy-net.png')] opacity-75"></div>

        {/* <!-- CD Wrapper --> */}
        <div className="relative h-32 w-32">
          {/* <!-- CD Image --> */}
          <Image
            // src="https://upload.wikimedia.org/wikipedia/en/2/26/Daft_Punk_-_Random_Access_Memories.png"
            src={data.image}
            alt="CD"
            width={300}
            height={300}
            quality={100}
            className="relative z-10 h-full w-full animate-spin-slow rounded-full object-cover"
          />

          {/* <!-- Center Hole --> */}
          <div className="absolute left-1/2 top-1/2 z-20 h-1/5 w-1/5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-br from-[rgba(255,175,189,1)] to-[rgba(100,216,255,1)] shadow-[inset_0_0_5px_rgba(0,0,0,0.7)]"></div>
        </div>
      </div>
    </div>
  )
}
