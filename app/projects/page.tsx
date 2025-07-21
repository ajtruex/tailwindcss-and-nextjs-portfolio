"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Metadata } from "next"
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BsArrowUpRight } from "react-icons/bs"

const Projects = () => {
  // Remove screen state, use isClient instead
  const [isClient, setIsClient] = useState(false)
  const [loading, setLoading] = useState<boolean>(true)

  // Ref to store positions of each card
  const positionsRef = useRef<{ [key: number]: { x: string; y: string } }>({})

  // State to store z-indices of each card
  const [zIndices, setZIndices] = useState<{
    [key: number]: number
  }>({})

  useEffect(() => {
    setIsClient(true)
    setLoading(false)

    let initialZIndices: { [key: number]: number } = {}
    for (let i = 0; i < projects.length; i++) {
      // Set z-index based on array order - first project gets highest z-index
      let newZIndex = projects.length - i + 100
      initialZIndices[i] = newZIndex
    }

    // This is our max zIndex, which will increment whenever user interacts w/ a card
    initialZIndices[-1] = projects.length + 120

    setZIndices(initialZIndices)
  }, [])

  const handleCardClick = (index: number) => {
    const newZIndices = { ...zIndices }
    newZIndices[-1] += 1
    newZIndices[index] = newZIndices[-1]
    setZIndices(newZIndices)
  }

  // Generate random positions and store them in the ref
  const getRandomPosition = (index: number) => {
    if (!positionsRef.current[index] && isClient) {
      // Use fixed dimensions for cards (adjust as needed)
      const cardWidth = 250
      const cardHeight = 200

      // Offset from the top to avoid overlapping the header
      const topOffset = 250 // px, adjust as needed to match header height

      // Access window directly
      const containerWidth = window.innerWidth - 100
      const containerHeight = window.innerHeight

      const maxX = Math.max(0, containerWidth - cardWidth)
      const maxY = Math.max(0, containerHeight - cardHeight - topOffset)

      const randomX = Math.random() * maxX
      const randomY = topOffset + Math.random() * maxY

      positionsRef.current[index] = { x: `${randomX}px`, y: `${randomY}px` }
    }
    return positionsRef.current[index]
  }

  if (loading) {
    return (
      <div className="mx-auto px-4 sm:px-6">
        <h1 className="text-5xl text-center font-bold mt-20 mb-12">Projects</h1>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-500" />
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto px-4 sm:px-6 min-h-screen">
      <h1 className="text-5xl text-center font-bold mt-20 mb-12">Projects</h1>

      {/* Grid Layout for small screens (below lg) */}
      <div className="block lg:hidden">
        <div className="grid grid-cols-1 gap-6 mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <Card className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-zinc-800 w-[400px] mx-auto">
                <CardHeader className="pt-0 px-0 pb-3 space-y-0">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="rounded-t-xl object-cover object-left-top aspect-video"
                      style={{
                        aspectRatio: "16/9",
                      }}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt=""
                      quality={100}
                      width={1600}
                      height={900}
                      className="rounded-b-none rounded-t-xl object-cover object-left-top aspect-video"
                    />
                  )}
                </CardHeader>
                <CardContent className="p-4">
                  <Link href={`/projects/${project.route}`} className="block">
                    <CardTitle className="mb-3 text-lg hover:text-blue-600 transition-colors">
                      {project.name}
                      <BsArrowUpRight
                        size={14}
                        className="inline ml-1 mb-0.5"
                      />
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>

                  {/* Tools used */}
                  {project.tools && (
                    <div className="flex flex-nowrap gap-1 mt-3 max-h-16">
                      {project.tools.length > 3 ? (
                        <>
                          {project.tools.slice(0, 3).map((tool, toolIndex) => (
                            <div
                              key={toolIndex}
                              className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-700 px-1 py-1 rounded-md text-xs break-words"
                            >
                              <Image
                                src={tool.image}
                                alt={tool.name}
                                width={12}
                                height={12}
                                className="rounded-sm"
                              />
                              <span>{tool.name}</span>
                            </div>
                          ))}
                          <span className="text-xs text-zinc-500 px-2 py-1 text-nowrap">
                            +{project.tools.length - 3} more
                          </span>
                        </>
                      ) : (
                        project.tools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-700 px-1 py-1 rounded-md text-xs break-words"
                          >
                            <Image
                              src={tool.image}
                              alt={tool.name}
                              width={12}
                              height={12}
                              className="rounded-sm"
                            />
                            <span>{tool.name}</span>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scattered Cards Container for larger screens (lg and above) */}
      <div className="hidden lg:flex w-full h-[80vh]">
        {projects.map((project, index) => {
          if (!isClient) return null
          const { x, y } = getRandomPosition(index)
          const zIndex = zIndices[index]

          return (
            // Make sure the Link doesn't interfere with dragging
            <motion.div
              key={project.name}
              className="absolute"
              drag
              dragMomentum={false}
              style={{
                zIndex: zIndex,
                left: x,
                top: y,
              }}
              onMouseDown={() => handleCardClick(index)}
              onTouchStart={() => handleCardClick(index)}
              whileHover={{
                scale: 1.05,
                translateY: -4,
              }}
              whileDrag={{
                scale: 1.1,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
            >
              <Card className="rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 dark:bg-zinc-800 cursor-grab active:cursor-grabbing w-[250px]">
                <CardHeader className="pt-0 px-0 pb-3 space-y-0">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      className="rounded-t-xl object-cover object-left-top aspect-video"
                      style={{
                        aspectRatio: "16/9",
                      }}
                    />
                  ) : (
                    <Image
                      src={project.image}
                      alt=""
                      quality={100}
                      width={1600}
                      height={900}
                      className="rounded-b-none rounded-t-xl object-cover object-left-top aspect-video"
                      style={{
                        aspectRatio: "16/9",
                      }}
                      draggable={false}
                    />
                  )}
                </CardHeader>
                <CardContent className="p-4">
                  <Link
                    href={`/projects/${project.route}`}
                    className="block"
                    draggable="false"
                  >
                    <CardTitle className="mb-3 text-lg hover:text-blue-600 transition-colors">
                      {project.name}
                      <BsArrowUpRight
                        size={14}
                        className="inline ml-1 mb-0.5"
                      />
                    </CardTitle>
                  </Link>
                  <CardDescription className="text-sm line-clamp-2">
                    {project.description}
                  </CardDescription>

                  {/* Tools used */}
                  {project.tools && (
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.tools.length > 3 ? (
                        <>
                          {project.tools.slice(0, 3).map((tool, toolIndex) => (
                            <div
                              key={toolIndex}
                              className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-700 px-1 py-1 rounded-md text-xs"
                            >
                              <Image
                                src={tool.image}
                                alt={tool.name}
                                width={12}
                                height={12}
                                className="rounded-sm"
                              />
                              <span>{tool.name}</span>
                            </div>
                          ))}
                          <span className="text-xs text-zinc-500 px-2 py-1">
                            +{project.tools.length - 3} more
                          </span>
                        </>
                      ) : (
                        project.tools.map((tool, toolIndex) => (
                          <div
                            key={toolIndex}
                            className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-700 px-2 py-1 rounded-md text-xs"
                          >
                            <Image
                              src={tool.image}
                              alt={tool.name}
                              width={12}
                              height={12}
                              className="rounded-sm"
                            />
                            <span>{tool.name}</span>
                          </div>
                        ))
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
