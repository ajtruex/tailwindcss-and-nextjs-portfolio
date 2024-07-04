import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import { projects } from "@/data/projects"

// const projects = [
//   {
//     name: "Next Movies",
//     description: "A movie review aggregator made with Next.js.",
//     image: "/next-movies.png",
//     github: "https://github.com/ajtruex/next-movies",
//     link: "",
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

const ProjectSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-indigo-500    to-fuchsia-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-12">
        {projects
          .map((project, idx) => {
            return (
              <div key={idx}>
                {/* <SlideUp offset="-300px 0px -300px 0px"> */}
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className="md:w-1/2 mt-8">
                    <Link href={`/projects/${project.route}`}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2 mt-12">
                    <Link href={`/projects/${project.route}`}>
                      <h1 className="text-4xl font-bold mb-6">
                        {project.name}
                      </h1>
                    </Link>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* </SlideUp> */}
              </div>
            )
          })
          .slice(0, 4)}
      </div>
    </section>
  )
}

export default ProjectSection
