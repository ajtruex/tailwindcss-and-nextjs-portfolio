"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { Music, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function CDPlayer() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState({
    isPlaying: false,
    name: "",
    artist: "",
    url: "",
    image: "",
  })

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
  return data?.isPlaying ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="fixed bottom-4 left-4 flex flex-col items-start"
    >
      <div className="relative">
        <div className="border-2 border-[#00ffcc] bg-gradient-to-br from-[rgba(255,175,189,0.8)] to-[rgba(100,216,255,0.8)] p-2 bg-blend-screen shadow-[0_0_20px_#00ffcc,_inset_0_0_10px_rgba(255,255,255,0.05)] transition-all duration-1000 hover:scale-y-110 hover:scale-x-105 hover:shadow-[0_0_35px_#00ffcc,_inset_0_0_15px_rgba(255,255,255,0.1)] rounded-xl flex items-center 2xl:w-fit  group">
          {/* <!-- Noisy Overlay --> */}
          <div className="pointer-events-none absolute inset-0 mx-auto h-auto w-auto items-center justify-center rounded-xl bg-[url('https://www.transparenttextures.com/patterns/noisy-net.png')] opacity-75"></div>

          {/* <!-- CD Wrapper --> */}
          <div className="flex shrink-0 2xl:w-24 2xl:h-24 w-14 h-14 relative lg:mr-2">
            {/* <!-- CD Image --> */}
            <Image
              src={data.image}
              alt="Album Art"
              fill
              className={`relative z-10 h-full w-full rounded-full object-cover
        ${data?.isPlaying ? "animate-spin-slow" : ""}`}
            />

            {/* <!-- CD Hole --> */}
            {/* <!-- Center Hole --> */}
            <div className="absolute left-1/2 top-1/2 z-20 h-1/5 w-1/5 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-gradient-to-br from-[rgba(255,175,189,1)] to-[rgba(100,216,255,1)] shadow-[inset_0_0_5px_rgba(0,0,0,0.7)]"></div>
          </div>

          <div className="lg:flex group-hover:flex flex-col z-10 items-start  overflow-hidden grow hidden  text-black  font-circular max-lg:group-hover:animate-fadeIn max-lg:group-hover:ml-1">
            <Link
              href={data?.url || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-xl text-base font-bold hover:underline text-left line-clamp-1 tracking-tight"
            >
              {data?.name || "Not listening to anything"}
            </Link>
            <p className="md:text-lg text-sm font-normal text-left line-clamp-1 tracking-tight">
              {data?.artist || "No artist"}
            </p>
            {/* <div className="flex items-center mt-1 text-base font-normal tracking-tighter">
              <Music
                className={`w-5 h-5 mr-1 ${
                  data?.isPlaying ? "text-green-500" : "text-red-500"
                }`}
              />
              <span className="">
                {isLoading
                  ? "Updating..."
                  : data?.isPlaying
                  ? "Now playing on Spotify"
                  : "Not listening to anything"}
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </motion.div>
  ) : null
}
