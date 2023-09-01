"use client"
import React from "react"
import Link from "next/link"
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiMail,
} from "react-icons/fi"
import { FaDev } from "react-icons/fa"
import { SiLastdotfm, SiSpotify } from "react-icons/si"
import Icon from "@/components/Icon"

//create array of links
//map over array of links

const LINKS = [
  {
    name: "Github",
    icon: FiGithub,
    link: "https://github.com/ajtruex",
  },
  {
    name: "Twitter",
    icon: FiTwitter,
    link: "https://twitter.com/ATrueDev",
  },
  {
    name: "read.cv",
    icon: Icon,
    link: "https://read.cv/truex",
    width: 60,
    height: 60,
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    link: "https://www.linkedin.com/in/ajtruex/",
  },
  {
    name: "Dev.to",
    icon: FaDev,
    link: "https://dev.to/truex",
  },
  {
    name: "Last.fm",
    icon: SiLastdotfm,
    link: "https://www.last.fm/user/ajtruex",
  },
  {
    name: "Spotify",
    icon: SiSpotify,
    link: "https://open.spotify.com/user/andrewtruex",
  },
  {
    name: "YouTube",
    icon: FiYoutube,
    link: "https://www.youtube.com/@andrewtruex",
  },
  {
    name: "Instagram",
    icon: FiInstagram,
    link: "https://www.instagram.com/atruedev/",
  },
  {
    name: "Email",
    icon: FiMail,
    link: "mailto:andrewtruex@gmail.com",
  },
]

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-full lg:w-full">
      <h1 className="text-7xl text-center font-bold mt-20 mb-12">Contact</h1>
      <div className="md:flex justify-center items-center hidden">
        <div className="bg-neutral-900 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 rounded-xl flex items-center justify-start mb-12 p-4 flex-col space-y-10 w-full">
          <div className="flex-col lg:space-y-1 space-y-3 my-auto mx-auto w-full">
            {LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.link}
                target="_blank"
                className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-6xl font-normal hover:bg-violet-900 rounded-lg px-[10px] py-2 text-4xl"
              >
                <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-lg md:text-base">
                  {link.name}
                </p>
                {link.name === "read.cv"
                  ? link.icon({
                      width: 21,
                      height: 21,
                      className:
                        "text-neutral-100 dark:text-neutral-100 fill-zinc-800 dark:fill-zinc-300 ",
                    })
                  : link.icon({
                      width: "",
                      height: "",
                      className: "text-lg",
                    })}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="bg-neutral-900 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 rounded-[30px] flex items-center justify-start mb-12 p-[13px] flex-col space-y-10 ">
          <div className="flex-col lg:space-y-5 space-y-3 my-auto mx-auto">
            <Link
              href="https://github.com/ajtruex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-6xl font-black hover:bg-violet-900 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiGithub className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Github
            </Link>
            <Link
              href="https://twitter.com/ATrueDev"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-6xl font-black hover:bg-violet-800 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiTwitter className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Twitter
            </Link>
            <Link
              href="https://read.cv/truex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-6xl font-black hover:bg-violet-700 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <Icon
                width={60}
                height={60}
                className="text-neutral-100 dark:text-neutral-100 fill-neutral-100 dark:fill-neutral-100 lg:mr-48 mr-24 lg:w-[60px] lg:h-[60px] w-9 h-9"
              />
              read.cv
            </Link>
            <Link
              href="https://www.linkedin.com/in/ajtruex/"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-[56px]/[60px] tracking-tight font-black hover:bg-violet-600 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiLinkedin className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              LinkedIn
            </Link>
            <Link
              href="https://dev.to/truex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-6xl font-black hover:bg-violet-500 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FaDev className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Dev.to
            </Link>
            <Link
              href="https://www.last.fm/user/ajtruex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-6xl font-black hover:bg-purple-800 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <SiLastdotfm className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Last.fm
            </Link>
            <Link
              href="https://open.spotify.com/user/andrewtruex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-6xl font-black hover:bg-purple-700 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <SiSpotify className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Spotify
            </Link>
            <Link
              href="https://www.youtube.com/@andrewtruex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-[56px]/[60px] tracking-tight font-black hover:bg-purple-600 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiYoutube className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              YouTube
            </Link>
            <Link
              href="https://www.instagram.com/atruedev/"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-[50px]/[60px] tracking-tight font-black hover:bg-purple-500 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiInstagram className="lg:text-6xl lg:mr-48 mr-24 text-4xl " />
              Instagram
            </Link>
            <Link
              href="mailto:andrewtruex@gmail.com"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center justify-between lg:text-6xl font-black hover:bg-purple-400 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiMail className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Email
            </Link>
          </div>
        </div>
      </div>
      <div className="dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 bg-gradient-to-r from-neutral-200 to-zinc-200 rounded-lg shadow-xl p-4 flex justify-between gap-2 md:hidden">
        <div className="flex flex-col w-full gap-2">
          {LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              target="_blank"
              className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1"
            >
              <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
                {link.name}{" "}
                <span className="dark:text-zinc-600 text-zinc-500">
                  {" // "}
                </span>{" "}
              </p>
              <p className="dark:text-zinc-300 text-zinc-800 m-0">
                {link.name === "read.cv"
                  ? link.icon({
                      width: 21,
                      height: 21,
                      className:
                        "text-neutral-100 dark:text-neutral-100 fill-zinc-800 dark:fill-zinc-300 ",
                    })
                  : link.icon()}
              </p>
            </Link>
            // <div
            //   key={index}
            //   className="flex justify-between items-center dark:bg-zinc-900/60 bg-zinc-100/60 duration-200 p-2 rounded-lg hover:shadow-lg cursor-pointer w-full hover:-translate-y-1"
            //   onClick={() => window.open(link.link, "_blank")}
            // >
            //   <p className="dark:text-zinc-300 text-zinc-800 m-0 text-sm lg:text-base md:text-base">
            //     {link.name}{" "}
            //     <span className="dark:text-zinc-600 text-zinc-500">
            //       {" // "}
            //     </span>{" "}
            //   </p>
            //   <p className="dark:text-zinc-300 text-zinc-800 m-0">
            //     {link.name === "read.cv"
            //       ? link.icon({
            //           width: 21,
            //           height: 21,
            //           className:
            //             "text-neutral-100 dark:text-neutral-100 fill-zinc-800 dark:fill-zinc-300 ",
            //         })
            //       : link.icon({})}

            //   </p>
            // </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact
