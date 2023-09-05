"use client"
import React from "react"
import useSWR from "swr"
import fetcher from "@/lib/fetcher"
import Link from "next/link"

export type UmamiResponse = {
  pageviews: {
    value: number
  }
  uniques: {
    value: number
  }
}
const Stats = () => {
  const { data: umamiData } = useSWR<UmamiResponse>("/api/umami", fetcher)
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h1 className="text-7xl text-center font-bold mt-20 mb-12">Stats</h1>
      <Link
        href="https://umami.andrewtruex.tech/share/v2eg9ufhtGbiZhaa/Andrew%20Truex"
        target="_blank"
        className="flex text-4xl text-center justify-center font-semibold mb-12"
      >
        Website Views: {umamiData?.pageviews.value}
      </Link>
    </div>
  )
}

export default Stats
