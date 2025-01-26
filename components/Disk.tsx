"use client"

import { motion, MotionConfig, AnimatePresence } from "framer-motion"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Skeleton } from "@/components/ui/skeleton"

// const transition = { type: "spring", bounce: 0, duration: 0.5 }

function CD() {
  const [isLoading, setIsLoading] = useState(true)
  // const { currentSongIndex, setCurrentSongIndex, status, setStatus, allSongs } =
  //   useAudio()
  const [data, setData] = useState({
    isPlaying: false,
    name: "",
    artist: "",
    url: "",
    image: "",
  })
  // const currentSong = allSongs[currentSongIndex]
  // const playing = status === "playing"
  // const audioRef = useRef(null)

  // useEffect(() => {
  //   if (audioRef.current) {
  //     if (playing) {
  //       audioRef.current.play()
  //     } else {
  //       audioRef.current.pause()
  //     }
  //   }
  // }, [playing, currentSongIndex])

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
    <div className="relative h-[225px] w-[700px]">
      {/* {isLoading ? (
        <div className="flex animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-500 mx-auto" />

      ) : ( */}
      {/* <div> */}
      <motion.div
        initial={{ rotate: 0, x: "-50%", y: "-12px", borderRadius: 272 }}
        animate={
          data?.isPlaying
            ? {
                rotate: 360,
                transition: {
                  ease: "linear",
                  duration: 20,
                  repeat: Infinity,
                },
              }
            : {
                rotate: 0,
                transition: { duration: 0.5 },
              }
        }
        whileHover={{
          scale: 1.03,
          // y: -20,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="size-[544px] absolute left-1/2 z-10 flex flex-grow origin-center select-none items-center justify-center overflow-hidden border-2 border-[#d3d3d3] bg-neutral-900 shadow-[0_0_80px_-20px_rgba(0,0,0,0.3)] "
      >
        <AnimatePresence mode="sync">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0 }}
            className="absolute inset-0 rounded-full overflow-hidden"
          >
            <Image
              src={data.image}
              alt="Album Art"
              className="pointer-events-none select-none object-cover"
              style={{ objectFit: "cover" }}
              loading="eager"
              priority
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </AnimatePresence>

        <motion.div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
          <div className="size-[480px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.1px] border-white bg-transparent opacity-35" />
          <div className="size-[150px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.75px] border-white backdrop-blur-sm" />
          <div className="size-[143px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[5px] border-hidden border-gray-200/15" />
          <div className="size-[127px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[0.8px] border-white bg-[#c3c3c5] opacity-70" />
          <div className="size-[85px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#bdbabc]" />
          <div className="size-[70px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#cfcdcf]" />
          <div className="size-[67px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e4ea]" />
          <div className="size-[60px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-[#c8c7c5] bg-[#f5f5f5] shadow-[0_0_24px_-12px_rgba(0,0,0,0.30)_inset]" />
        </motion.div>
      </motion.div>

      {/* <div className="absolute flex bottom-[0%] left-1/2 -translate-x-1/2 space-x-[542px]">
      //   <button
      //     onClick={handlePreviousSong}
      //     aria-label="previous"
      //     className="bg-white/70 border border-neutral-200 rounded-full w-10 h-10 px-2 flex items-center justify-center transition-all  drop-shadow-sm hover:bg-white hover:scale-105"
      //   >
      //     <svg
      //       width="18"
      //       height="18"
      //       viewBox="0 0 21 21"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M0.75 0.75V20.75H4.08336V10.7504L20.75 20.75V0.75L4.08336 10.7492V0.75H0.75Z"
      //         fill="#AFAFAF"
      //       />
      //     </svg>
      //   </button>

      //   <button
      //     onClick={handleNextSong}
      //     aria-label="next"
      //     className="bg-white/70 border border-neutral-200 rounded-full w-10 h-10 px-2 flex items-center justify-center transition-all  drop-shadow-sm hover:bg-white hover:scale-105"
      //   >
      //     <svg
      //       width="18"
      //       height="18"
      //       viewBox="0 0 21 21"
      //       fill="none"
      //       xmlns="http://www.w3.org/2000/svg"
      //     >
      //       <path
      //         fillRule="evenodd"
      //         clipRule="evenodd"
      //         d="M20.75 0.75V20.75H17.4166V10.7504L0.75 20.75V0.75L17.4166 10.7492V0.75H20.75Z"
      //         fill="#AFAFAF"
      //       />
      //     </svg>
      //   </button>
      // </div> */}
      <div />
      {/* </div> */}
      {/* )} */}
    </div>
  )
}

export default CD
