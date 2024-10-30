"use client"

import { useState, useEffect } from "react"
import { Play, Volume2, Music, Plus, ArrowRight } from "lucide-react"

export default function Inspiration() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsLoaded(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Calculate opacity based on scroll position
  const heroOpacity = Math.max(0, Math.min(1 - scrollY / 500, 1))

  return (
    <div className="mx-auto">
      {/* Hero Section */}
      <section className=" h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 bg-neutral-900">
          <video
            className="absolute w-screen h-full object-cover"
            src="https://d34073qwlt06j3.cloudfront.net/bill.mp4"
            autoPlay
            loop
            muted
          />
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
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
            <h1
              className="text-7xl md:text-9xl font-light tracking-tight"
              style={{ fontFamily: "Apple Garamond, serif" }}
            >
              <div className="overflow-hidden">
                <span className="inline-block translate-y-full animate-slideUp">
                  Insp
                  <span className="opacity-50">iration</span>
                </span>
              </div>
            </h1>
            <p className="max-w-md mx-auto text-lg text-neutral-200">
              A curated collection of moments that inspire creativity and push
              boundaries
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 transition-all duration-300"
          style={{ opacity: heroOpacity }}
        >
          <div className="w-px h-16 bg-white/20">
            <div className="w-full h-1/2 bg-white/80 animate-scrollIndicator" />
          </div>
          <span className="text-sm text-neutral-400">Scroll to explore</span>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10">
        {/* Video Grid */}
        <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-black">
          {[1, 2, 3].map((index) => (
            <div key={index} className="group relative aspect-video">
              <div className="absolute inset-0 bg-neutral-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-12 h-12 transform scale-0 group-hover:scale-100 transition-transform duration-500" />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-px border border-neutral-800 rounded-lg -z-10 translate-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </section>

        {/* Memento Mori Section */}
        <section className="min-h-screen flex items-center justify-center relative bg-black">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <div className="text-[20vw] font-bold tracking-tighter">MORI</div>
          </div>
          <div className="relative z-10 text-center space-y-4">
            <h2
              className="text-5xl md:text-7xl font-light"
              style={{ fontFamily: "Apple Garamond, serif" }}
            >
              Memento Mori
            </h2>
            <p className="text-neutral-400">remember that you have to die</p>
          </div>
        </section>
      </div>

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
      `}</style>
    </div>
  )
}
