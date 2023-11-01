"use client"
import useSWR from "swr"
import fetcher from "../lib/fetcher"
import Link from "next/link"

export type TopArtistsResponse = {
  name: string
  playcount: string
  url: string
}

export default function TopArtists() {
  const { data } = useSWR<TopArtistsResponse[]>("/api/top-artists", fetcher)
  const { data: year } = useSWR<TopArtistsResponse[]>(
    "/api/top-artists-year",
    fetcher
  )
  return (
    <div className="flex space-x-4 ">
      <div className="dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2 w-1/2">
        <div>
          <h2 className="m-0 dark:text-zinc-200 text-zinc-900 font-black text-xl">
            Top Artists
          </h2>
          <p className="m-0 dark:text-zinc-400 text-zinc-700 text-sm">Month</p>
        </div>
        <div className="flex flex-col ">
          {data?.map((artist, index) => (
            <Link
              href={artist.url}
              key={index}
              className="flex justify-between items-center dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200"
              target="_blank"
            >
              <p className="dark:text-zinc-200 text-zinc-900 m-0">
                {artist.name}
              </p>
              {/* <span className="text-zinc-500">{"//"}</span> */}
              <p className="dark:text-zinc-200 text-zinc-900 m-0">
                {artist.playcount}{" "}
                <span className="dark:text-zinc-500 text-zinc-600">plays</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2 w-1/2">
        <div>
          <h2 className="m-0 dark:text-zinc-200 text-zinc-900 font-black text-xl">
            Top Artists
          </h2>
          <p className="m-0 dark:text-zinc-400 text-zinc-700 text-sm">Year</p>
        </div>
        <div className="flex flex-col ">
          {year?.map((artist, index) => (
            <Link
              href={artist.url}
              key={index}
              className="flex justify-between items-center dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200"
              target="_blank"
            >
              <p className="dark:text-zinc-200 text-zinc-900 m-0">
                {artist.name}
              </p>
              {/* <span className="text-zinc-500">{"//"}</span> */}
              <p className="dark:text-zinc-200 text-zinc-900 m-0">
                {artist.playcount}{" "}
                <span className="dark:text-zinc-500 text-zinc-600">plays</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
