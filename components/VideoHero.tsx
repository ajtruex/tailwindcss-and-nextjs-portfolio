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

export function VideoHero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isPlaying, setIsPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
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
    <div className="items-center mx-auto ">
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
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
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
              A curated collection of moments that inspire me
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
export default VideoHero
