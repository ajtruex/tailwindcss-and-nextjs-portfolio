"use client"

import { useState, useEffect, useRef } from "react"
import {
  Play,
  Volume2,
  VolumeX,
  Plus,
  ArrowRight,
  Pause,
  X,
} from "lucide-react"
import { Card } from "@/components/ui/card"

export function VideoGrid() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [expandedVideo, setExpandedVideo] = useState(null)

  const videoRef = useRef(null)
  const expandedVideoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const volume = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVideoClick = (src) => {
    setExpandedVideo(src)
  }

  const handleCloseExpanded = () => {
    setExpandedVideo(null)
  }

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setExpandedVideo(null)
      }
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  // Calculate opacity based on scroll position
  const heroOpacity = Math.max(0, Math.min(1 - scrollY / 500, 1))

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section className="h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-neutral-900">
          <video
            className="absolute w-screen h-full object-cover"
            ref={videoRef}
            autoPlay
            loop
            muted
          >
            <source
              src="https://d34073qwlt06j3.cloudfront.net/Mac-Miller-NPR-Music-Tiny-Desk-Concert.mp4#t=15"
              type="video/mp4"
            />
          </video>
          <button
            onClick={togglePlay}
            className="absolute bottom-4 right-4 z-50 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors"
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
          <button
            onClick={volume}
            className="absolute bottom-4 right-16 z-50 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors"
          >
            {isMuted ? <Volume2 size={24} /> : <VolumeX size={24} />}
          </button>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/65 z-10" />
        </div>

        {/* Hero Content */}
        <div
          className="relative z-20 h-full flex flex-col justify-center items-center text-center transition-all duration-300"
          style={{
            opacity: heroOpacity,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="space-y-8 px-6">
            <h1 className="text-7xl md:text-9xl font-normal font-garamond tracking-tight">
              <div className="overflow-hidden">
                <span className="inline-block translate-y-full animate-slideUp mb-6">
                  Inspiration
                </span>
              </div>
            </h1>
            <p className="max-w-md mx-auto text-lg text-neutral-200">
              A curated collection of moments that inspire creativity and push
              boundaries
            </p>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="">
        {/* Video Grid */}
        <section className="flex flex-col gap-4 p-4 space-y-12">
          <div className="flex flex-row space-x-12">
            <Card
              className="w-1/2 relative z-50 rounded-xl transition-colors cursor-pointer"
              onClick={() => handleVideoClick("./seth-rogen-inspo.mp4")}
            >
              <video className="rounded-xl">
                <source src="./seth-rogen-inspo.mp4" type="video/mp4" />
              </video>
              <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-2 bg-zinc-900/40" />
              <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-3 bg-zinc-900/30" />
              <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-4 bg-zinc-900/20" />
            </Card>
            <div className="flex flex-col justify-evenly md:space-y-24 space-y-4  w-1/2">
              <Card
                className="w-auto relative z-50 rounded-xl hover:border-zinc-900/20 transition-colors rotate-1 cursor-pointer dark:hover:border-zinc-50/20"
                onClick={() =>
                  handleVideoClick(
                    "https://res.cloudinary.com/ajtruex/video/upload/q_auto:best/v1696464400/rapisreligion2023-08-21__021616.mp4"
                  )
                }
              >
                <video className="rounded-xl aspect-auto">
                  <source
                    src="https://res.cloudinary.com/ajtruex/video/upload/q_auto:best/v1696464400/rapisreligion2023-08-21__021616.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-0.5 bg-gradient-to-r from-indigo-500/40  to-fuchsia-500/40" />
                <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-1 bg-gradient-to-r from-indigo-500/30  to-fuchsia-500/30" />
                <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-1.5 bg-gradient-to-r from-indigo-500/20  to-fuchsia-500/20" />
              </Card>
              <Card
                className="w-auto relative z-50 rounded-xl hover:border-zinc-900/20 transition-colors -rotate-1 flex mb-12 cursor-pointer dark:hover:border-zinc-50/20"
                onClick={() =>
                  handleVideoClick(
                    "https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.mp4"
                  )
                }
              >
                <video
                  poster="https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.webp"
                  className="rounded-xl aspect-auto"
                >
                  <source
                    src="https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.mp4"
                    type="video/mp4"
                  />
                </video>
                <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-2 bg-zinc-900/40" />
                <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-3 bg-zinc-900/30" />
                <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-4 bg-zinc-900/20" />
              </Card>
            </div>
          </div>
          {/* Memento Mori Section */}
          <div className="flex flex-col">
            <h1 className="text-5xl sm:text-8xl font-bold items-end text-end justify-end mt-6 sm:mt-6 tracking-tight font-seasons">
              Memento Mori
            </h1>
            <p className="text-xl sm:text-3xl text-gray-400 mr-4 sm:mr-[104px] items-end text-end justify-end tracking-tight font-seasons">
              &quot;remember that you have to die&quot;
            </p>
          </div>
          <div className="flex flex-col space-y-6">
            <Card
              className="relative rounded-xl transition-colors z-50 bg-zinc-900 cursor-pointer"
              onClick={() =>
                handleVideoClick(
                  "https://d34073qwlt06j3.cloudfront.net/Daft_Punk-Alive_2007_Wireless_O2.mp4"
                )
              }
            >
              <video
                poster="https://d34073qwlt06j3.cloudfront.net/daft-punk-poster.webp"
                className="rounded-xl aspect-auto"
              >
                <source
                  src="https://d34073qwlt06j3.cloudfront.net/Daft_Punk-Alive_2007_Wireless_O2.mp4"
                  type="video/mp4"
                />
              </video>
              <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-2 bg-zinc-900/40" />
              <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-3 bg-zinc-900/30" />
              <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-4 bg-zinc-900/20" />
            </Card>
          </div>
        </section>
      </div>

      {/* Expanded floating video player */}
      {expandedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative w-full max-w-4xl">
            <button
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/75 text-white p-3 rounded-full transition-colors"
              onClick={handleCloseExpanded}
            >
              <X size={24} />
              <span className="sr-only">Close</span>
            </button>

            <video
              ref={expandedVideoRef}
              controls
              autoPlay
              className="w-full rounded-xl shadow-lg max-h-screen"
              src={expandedVideo}
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes scrollIndicator {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scrollIndicator {
          animation: scrollIndicator 2s ease-in-out infinite;
        }
        @keyframes slideUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0);
          }
        }
        .animate-slideUp {
          animation: slideUp 1s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.9);
          }
          to {
            transform: scale(1);
          }
        }
        .fixed {
          animation: fadeIn 0.3s ease-out;
        }
        .fixed > div {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
