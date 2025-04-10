"use client"
import Link from "next/link"
import { useState, useEffect } from "react"
import { FiChevronDown } from "react-icons/fi"

export type TopTracksResponse = {
  name: string
  playcount: string
  url: string
  artist: string
}

export default function TopTracks() {
  const [to, setTo] = useState("Month")
  const [isOpen, setIsOpen] = useState(false)
  const [monthlyTracks, setMonthlyTracks] = useState<TopTracksResponse[]>([])
  const [yearlyTracks, setYearlyTracks] = useState<TopTracksResponse[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        setIsLoading(true)
        const [monthlyResponse, yearlyResponse] = await Promise.all([
          fetch("/api/spotify/top-tracks", { cache: "no-store" }),
          fetch("/api/spotify/top-tracks-year", { cache: "no-store" }),
        ])

        if (!monthlyResponse.ok || !yearlyResponse.ok) {
          throw new Error("Failed to fetch tracks")
        }
        const monthlyData = await monthlyResponse.json()
        const yearlyData = await yearlyResponse.json()

        setMonthlyTracks(monthlyData)
        setYearlyTracks(yearlyData)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred")
      } finally {
        setIsLoading(false)
      }
    }
    fetchTracks()
  }, [])

  // const { data } = useSWR<TopTracksResponse[]>(
  //   "/api/spotify/top-tracks",
  //   fetcher
  // )
  // const { data: year } = useSWR<TopTracksResponse[]>(
  //   "/api/spotify/top-tracks-year",
  //   fetcher
  // )

  if (error) return <div>Error loading tracks: {error}</div>
  if (isLoading)
    return (
      <div className="flex space-x-0 md:space-x-4  flex-col md:space-y-0 space-y-4 justify-center items-center">
        <div className="dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2 md:w-1/2 w-full">
          {/* <div className="flex flex-col items-center justify-center"> */}
          <h2 className="m-0 dark:text-zinc-200 text-zinc-900 font-black text-xl">
            Top Tracks
          </h2>
          <div className="flex animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-500 mx-auto" />
          {/* </div> */}
        </div>
      </div>
    )

  const tracks = to === "Month" ? monthlyTracks : yearlyTracks

  return (
    <div className="flex space-x-0 md:space-x-4 md:flex-row flex-col md:space-y-0 space-y-4 justify-center items-center">
      <div className="dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2 md:w-1/2 w-full">
        <div>
          <h2 className="m-0 dark:text-zinc-200 text-zinc-900 font-black text-xl">
            Top Tracks
          </h2>
          <div className="relative">
            <button
              className="dark:bg-zinc-800 p-2 rounded dark:hover:bg-zinc-800 text-sm dark:text-zinc-400 text-zinc-900 bg-zinc-300 hover:bg-zinc-400 "
              onClick={() => setIsOpen(!isOpen)}
              value={to}
            >
              {to}
              <FiChevronDown className="inline ml-1" />
            </button>
            {isOpen && (
              <div className="absolute mt-1 m-0 text-sm dark:text-zinc-400 text-zinc-700 rounded p-1 shadow dark:bg-zinc-800 bg-zinc-300">
                <button
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => (
                    setTo((e.target as HTMLButtonElement).value),
                    setIsOpen(false)
                  )}
                  className="block w-full p-2 rounded  hover:bg-gray-100"
                  value={"Month"}
                >
                  Month
                </button>
                <button
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => (
                    setTo((e.target as HTMLButtonElement).value),
                    setIsOpen(false)
                  )}
                  className="block w-full p-2 rounded hover:bg-gray-100"
                  value={"Year"}
                >
                  Year
                </button>
              </div>
            )}
          </div>
          {to === "Month" ? (
            <div className="flex flex-col">
              {monthlyTracks?.map((track, index) => (
                <Link
                  href={track.url}
                  key={index}
                  className="flex justify-between items-start dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200"
                  target="_blank"
                >
                  <p className="dark:text-zinc-200 text-zinc-900 m-0 inline-block truncate w-4/5 ">
                    {track.name}{" "}
                    <span className="text-xs dark:text-zinc-400 text-zinc-700 flex flex-col">
                      {track.artist}
                    </span>
                  </p>
                  <p className="dark:text-zinc-200 text-zinc-900 m-0">
                    {track.playcount}{" "}
                    <span className="text-zinc-500">plays</span>
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col ">
              {yearlyTracks?.map((track, index) => (
                <Link
                  href={track.url}
                  key={index}
                  className="flex justify-between items-start dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200 truncate"
                  target="_blank"
                >
                  <p className="dark:text-zinc-200 text-zinc-900 m-0 inline-block truncate w-4/5">
                    {track.name}{" "}
                    <span className="text-xs dark:text-zinc-400 text-zinc-700 flex flex-col">
                      {track.artist}
                    </span>
                  </p>
                  <p className="dark:text-zinc-200 text-zinc-900 m-0">
                    {track.playcount}{" "}
                    <span className="text-zinc-500">plays</span>
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* <div className="dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2 md:w-1/2 w-full">
        <div>
          <h2 className="m-0 dark:text-zinc-200 text-zinc-900 font-black text-xl">
            Top Tracks
          </h2>

          <p className="m-0 dark:text-zinc-400 text-zinc-700 text-sm">Month</p>
        </div>
        <div className="flex flex-col ">
          {data?.map((track, index) => (
            <Link
              href={track.url}
              key={index}
              className="flex justify-between items-center dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200"
              target="_blank"
            >
              <p className="dark:text-zinc-200 text-zinc-900 m-0 flex flex-col">
                {track.name}{" "}
                <span className="text-xs dark:text-zinc-400 text-zinc-700">
                  {track.artist}
                </span>
              </p>
              <p className="dark:text-zinc-200 text-zinc-900 m-0">
                {track.playcount} <span className="text-zinc-500">plays</span>
              </p>
            </Link>
          ))}
        </div>
      </div> */}
      {/* <div className="dark:bg-gradient-to-r dark:from-neutral-900 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2 md:w-1/2 w-full">
        <div>
          <h2 className="m-0 dark:text-zinc-200 text-zinc-900 font-black text-xl">
            Top Tracks
          </h2>
          <p className="m-0 dark:text-zinc-400 text-zinc-700 text-sm">Year</p>
        </div>
        <div className="flex flex-col">
          {year?.map((track, index) => (
            <Link
              href={track.url}
              key={index}
              className="flex justify-between items-center dark:hover:bg-zinc-900/60 hover:bg-zinc-100/60 rounded-lg p-2 hover:shadow-lg cursor-pointer duration-200 truncate"
              target="_blank"
            >
              <p className="dark:text-zinc-200 text-zinc-900 m-0 flex flex-col truncate">
                {track.name}{" "}
                <span className="text-xs dark:text-zinc-400 text-zinc-700">
                  {track.artist}
                </span>
              </p>
              <p className="dark:text-zinc-200 text-zinc-900 m-0">
                {track.playcount} <span className="text-zinc-500">plays</span>
              </p>
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  )
}
