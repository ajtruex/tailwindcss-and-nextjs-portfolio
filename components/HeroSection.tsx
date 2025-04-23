"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { HiArrowDown } from "react-icons/hi"
import { Button, buttonVariants } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col items-center justify-center py-16 my-10 space-x-4 text-center lg:space-x-0 sm:py-32 md:flex-row md:text-center md:py-8">
        <div className="md:w-1/2 md:mt-2">
          <Image
            className="rounded-full shadow-2xl"
            src="/memoji-mac.png"
            alt=""
            width={325}
            height={325}
            priority
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-normal md:text-7xl md:mt-0 font-serif tracking-tighter">
            Hi, I&#39;m Andrew.
          </h1>
          <p className="mt-4 mb-6 text-base md:text-lg">
            I&#39;m a{" "}
            <span className="font-serif italic underline decoration-2 decoration-violet-700 underline-offset-4">
              web developer
            </span>{" "}
            with a focus on unique web experiences and products, inspired by
            culture, film, and innovation.
          </p>
          {/* <Link
            to="projects"
            className="flex items-center justify-center w-1/6 px-6 py-3 mx-auto font-semibold bg-gradient-to-r from-indigo-500  via-violet-700  to-fuchsia-500  cursor-pointer md:w-1/5 text-white rounded-full shadow-lg"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link> */}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-12">
        <div className="flex flex-row md:w-2/3 gap-4 md:gap-0 justify-between">
          <div className="relative inline-block p-[2px] bg-gradient-to-r from-indigo-500  via-violet-700  to-fuchsia-500 rounded-md">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="https://github.com/ajtruex"
              target="_blank"
            >
              <Github className="mr-2" />
              Github
            </Link>
            {/* <Button
              variant="outline"
              size="default"
              className="
          w-36

        "
            >

              <Github className="mr-2" />
              Github

            </Button> */}
          </div>
          <div className="relative inline-block p-[2px] bg-gradient-to-r from-green-800 via-teal-700 to-sky-900 rounded-md">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="https://www.linkedin.com/in/ajtruex/"
              target="_blank"
            >
              <Linkedin className="mr-2" />
              Linkedin
            </Link>
            {/* <Button
              variant="outline"
              size="default"
              className="

          w-36


        "
            >
              <Linkedin className="mr-2" />
              Linkedin
            </Button> */}
          </div>
          <div className="relative inline-block p-[2px] bg-gradient-to-r from-indigo-500 via-blue-700 to-cyan-200 rounded-md">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="mailto:andrewtruex@gmail.com"
              target="_blank"
            >
              <Mail className="mr-2" />
              Email
            </Link>
            {/* <Button
              variant="outline"
              size="default"
              className="
          w-36


        "
            >
              <Mail className="mr-2" />
              Email
            </Button> */}
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row items-center justify-center text-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          <HiArrowDown
            size={35}
            className="animate-bounce fill-violet-700 stroke-violet-700 stroke-1"
          />
        </Link>
      </div> */}
    </section>
  )
}

export default HeroSection
