import Image from "next/image"
import Link from "next/link"
import { SiSpotify } from "react-icons/si"

async function getNpOrRpSong() {
  const res = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ajtruex&api_key=${process.env.LASTFM_API_KEY}&format=json&limit=2`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    }
  )
  return res.json()
}

export default async function NowPlaying() {
  const data = await getNpOrRpSong()
  const song = data.recenttracks.track[0]
  const isPlaying = song["@attr"]?.nowplaying || false
  const songName = song.name
  const artist = song.artist["#text"]
  const url = song.url
  const image = song.image[3]["#text"]
  const string = new Response(
    JSON.stringify({
      isPlaying,
      songName,
      artist,
      url,
      image,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  )

  return (
    <div
      className=" dark:from-neutral-800 dark:to-zinc-800  from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex justify-between gap-2  bg-contain bg-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex flex-col justify-between">
        <h2 className="flex ml-0 mx-auto px-2 rounded-xl text-zinc-200 font-black md:text-xl text-base bg-zinc-800/30 backdrop-blur shadow-lg shadow-black">
          {isPlaying ? (
            <SiSpotify className="text-green-600 dark:text-green-400 md:text-xl text-base mr-2 mt-1" />
          ) : (
            <SiSpotify className="text-zinc-600 dark:text-zinc-400 md:text-xl text-base mr-2 mt-1" />
          )}

          {isPlaying ? "Now Playing" : "Last Played"}
        </h2>

        <div className="flex w-full">
          <div className="text-base backdrop-blur bg-zinc-800/40 rounded-xl text-zinc-200  shadow-lg shadow-black">
            <Link
              href={url}
              target="_blank"
              className="hover:bg-zinc-900/80 rounded-lg p-2 max-sm:pr-1 hover:shadow-lg cursor-pointer duration-200 break-after-all drop-shadow-lg"
            >
              {songName}
            </Link>
            by
            <Link
              href={url.substring(
                0,
                url.split("/").slice(0, 5).join("/").length + 1
              )}
              target="_blank"
              className="hover:bg-zinc-900/80 rounded-lg p-2 max-sm:pl-1 hover:shadow-lg cursor-pointer duration-200 break-before-auto"
            >
              {artist}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-16 w-16 lg:h-20 lg:w-20 md:w-20 md:h-20 shadow-xl shadow-black	rounded-md">
        <Image
          src={image}
          alt="album art"
          width={80}
          height={80}
          className="rounded-lg"
        />
      </div>
    </div>
  )
}
