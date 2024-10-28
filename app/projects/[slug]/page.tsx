import React from "react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"
import { BsGithub, BsArrowUpRightCircle } from "react-icons/bs"

const ProjectPage = async (props: { params: Promise<{ slug: string }> }) => {
  const params = await props.params;
  // const router = useRouter()
  // Get the slug from the router query

  // Find the project with the matching slug
  const project = projects.find((project) => project.route === params.slug)

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h1 className="text-4xl text-center font-bold mt-20 mb-3">
        {project.name}
      </h1>
      <p className="text-xl mb-3 text-neutral-600 dark:text-neutral-400 text-center">
        {project.description}
      </p>
      <div className="flex justify-center">
        <div className="flex items-center mb-12">
          <div className="relative inline-block group">
            <Link
              href={project.link}
              target="_blank"
              className="flex flex-col text-lg font-semibold mr-8"
            >
              {/* Demo */}
              <BsArrowUpRightCircle
                size={30}
                className="mt-2 cursor-pointer hover:-translate-y-1 transition-transform"
              />
            </Link>
            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute z-10 bg-slate-800 rounded-md shadow-lg p-1 text-lg font-semibold -left-1/2 ml-4">
              <p>Demo</p>
            </div>
          </div>
          <div className="relative inline-block group">
            <Link
              href={project.github}
              target="_blank"
              className="flex flex-col text-lg font-semibold hover:-translate-y-1 transition-transform"
            >
              {/* Source */}
              <BsGithub size={30} className="mt-2  cursor-pointer" />
            </Link>
            <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute z-10 bg-slate-800 rounded-md shadow-lg p-1 text-lg font-semibold -left-1/2">
              <p>Source</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="grid grid-cols-2">
        <h2 className="text-3xl text-center mt-12">
          Goals
          <hr />
          <div className="text-xl mt-4">
            {project.goals.map((goal, idx) => {
              return <p key={idx}>{goal}</p>
            })}
          </div>
        </h2>
        <Image
          src={project.image}
          alt=""
          width={1000}
          height={1000}
          className="rounded-xl shadow-xl"
        />
      </div> */}
      <div className="flex justify-center">
        <Image
          src={project.image}
          alt=""
          width={750}
          height={750}
          className="rounded-xl shadow-xl"
          priority
        />
      </div>
      <h2 className="text-5xl font-bold text-center mt-12">
        Tools
        <div className="mt-10 grid gap-10 justify-items-center md:justify-items-center md:grid-cols-3 lg:grid-cols-3 md:gap-3 lg:gap-x-10 lg:gap-y-10 ">
          {project.tools.map((tool, idx) => {
            return (
              <div
                className="group flex cursor-pointer flex-col space-y-5 rounded-2xl bg-[#111111] p-5 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 w-[200px] md:w-full"
                key={idx}
              >
                <p className="font-md text-xl text-white">{tool.name}</p>
                <Image
                  src={tool.image}
                  alt={tool.name}
                  width={120}
                  height={70}
                  className="transform self-center border-none text-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
                />
              </div>
            )
          })}
        </div>
      </h2>
    </div>
  )
}

export default ProjectPage
