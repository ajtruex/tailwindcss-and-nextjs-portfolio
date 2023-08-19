import React from "react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { Metadata } from "next"
export const metadata = {
  title: "Andrew Truex - Projects",
  icons: {
    icon: "/directory-computer.ico",
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
    <>
      <h1 className="text-5xl text-center font-bold mt-20 mb-12">Projects</h1>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <div>
                <Link href={`/projects/${project.route}`}>
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                  <h1 className="text-4xl font-semibold mb-3 mt-6 text-center">
                    {project.name}
                  </h1>
                  <p className="text-lg mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Projects
