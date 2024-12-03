import React from "react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Metadata } from "next"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import whosampled from "@/public/whosampled.png"

export const metadata = {
  title: "Projects",
  icons: {
    icon: "/directory_computer.ico",
  },
}
// const projects = [
//   {
//     name: "Portfolio",
//     description: "My old personal portfolio website built with Vue.js.",
//     image: "/portfolio2.png",
//     github: "https://github.com/ajtruex/portfolio2",
//     link: "https://beta.andrewtruex.tech/",
//     route: "Portfolio",
//   },
//   {
//     name: "MovieVuer",
//     description: "A movie review aggregator made with Vue.js.",
//     image: "/movievuer.png",
//     github: "https://github.com/ajtruex/MovieVuer",
//     link: "https://movievuer.netlify.app/",
//   },
//   {
//     name: "Next Movies",
//     description: "A movie review aggregator made with Next.js.",
//     image: "/next-movies.png",
//     github: "https://github.com/ajtruex/next-movies",
//     link: "http://movies.andrewtruex.tech/",
//   },
//   {
//     name: "BS Upcycled Home Decor",
//     description:
//       "A website for a local business built with Next.js featuring an image gallery.",
//     image: "/bs2.png",
//     github: "https://github.com/ajtruex/bsupcycledhomedecor",
//     link: "https://bsupcycledhomedecor.com/",
//   },
//   {
//     name: "WhoSampled Raycast Extension",
//     description:
//       "Search WhoSampled.com from the currently playing song in Spotify",
//     image: "/whosampled-raycast-extension.png",
//     github:
//       "https://github.com/raycast/extensions/tree/main/extensions/whosampled",
//     link: "https://www.raycast.com/truex/whosampled",
//   },
// ]

const Projects = () => {
  return (
    <div className="mx-auto  px-4 sm:px-6 ">
      <h1 className="text-5xl text-center font-bold mt-20 mb-12">Projects</h1>
      {/* <div className="grid lg:grid-cols-3 lg:gap-8 md:grid-cols-3 md:gap-5 grid-cols-1 gap-5"> */}
      <div className="grid grid-cols-3 gap-4 items-stretch">
        {projects.map((project, idx) => {
          return (
            <Link
              key={idx}
              href={`/projects/${project.route}`}
              className="hover:-translate-y-2 transition-transform transform flex"
            >
              <Card className="rounded-xl shadow-xl hover:opacity-70 transition-opacity dark:bg-zinc-800">
                <CardHeader className="pt-0 px-0 pb-3">
                  <Image
                    src={project.image}
                    alt=""
                    quality={100}
                    width={1600}
                    height={900}
                    className="rounded-b-none rounded-t-xl object-cover object-left-top aspect-video"
                  />
                </CardHeader>
                <CardContent className="">
                  <CardTitle className="mb-3">{project.name}</CardTitle>
                  <CardDescription className="">
                    {project.description}
                  </CardDescription>
                </CardContent>
                {/* <CardFooter>
                  <Link href={`/projects/${project.route}`}>View Project</Link>
                </CardFooter> */}
              </Card>
            </Link>

            //  <div className="hover:-translate-y-2 transition-transform transform">
            // <Link href={`/projects/${project.route}`}>
            // <Image
            // src={project.image}
            // alt=""
            // width={1000}
            // height={1000}
            // className="rounded-xl shadow-xl hover:opacity-70 aspect-auto"
            // />
            // <h1 className="text-4xl font-semibold mb-3 mt-6 text-center">
            // {project.name}
            // </h1>
            // <p className="text-lg mb-4 text-neutral-600 dark:text-neutral-400 md:text-start text-center">
            // {project.description}
            // </p>
            // </Link>
            //  </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
