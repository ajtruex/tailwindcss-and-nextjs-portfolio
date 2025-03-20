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
import { AiOutlineX } from "react-icons/ai"
import Icon from "@/components/Icon"


export const metadata = {
  title: "Contact",
  icons: {
    icon: "/phone_desk.ico",
  },
}

const Contact = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <h1 className="text-7xl text-center font-bold mt-20 mb-12">Contact</h1>
      <div className="flex justify-center items-center ">
        <div className="bg-neutral-900 rounded-[30px] flex items-center justify-start mb-12 p-[13px] flex-col space-y-10 ">
          <div className="flex-col lg:space-y-5 space-y-3 my-auto mx-auto">
            <Link
              href="https://github.com/ajtruex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-6xl font-black hover:bg-violet-900 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiGithub className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Github
            </Link>
            <Link
              href="https://x.com/web___guy"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-6xl font-black hover:bg-violet-800 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              {/* <FiTwitter className="lg:text-6xl lg:mr-48 mr-24 text-4xl" /> */}
              <AiOutlineX className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              X.com
            </Link>
            <Link
              href="https://read.cv/truex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-6xl font-black hover:bg-violet-700 rounded-[30px] px-[10px] py-2 text-4xl"
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
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-[56px]/[60px] tracking-tight font-black hover:bg-violet-600 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiLinkedin className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              LinkedIn
            </Link>
            <Link
              href="https://dev.to/truex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-6xl font-black hover:bg-violet-500 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FaDev className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Dev.to
            </Link>
            <Link
              href="https://www.last.fm/user/ajtruex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-6xl font-black hover:bg-purple-800 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <SiLastdotfm className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Last.fm
            </Link>
            <Link
              href="https://open.spotify.com/user/andrewtruex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-6xl font-black hover:bg-purple-700 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <SiSpotify className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Spotify
            </Link>
            <Link
              href="https://www.youtube.com/@andrewtruex"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-[56px]/[60px] tracking-tight font-black hover:bg-purple-600 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiYoutube className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              YouTube
            </Link>
            <Link
              href="https://www.instagram.com/atruedev/"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-[50px]/[60px] tracking-tight font-black hover:bg-purple-500 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiInstagram className="lg:text-6xl lg:mr-48 mr-24 text-4xl " />
              Instagram
            </Link>
            <Link
              href="mailto:andrewtruex@gmail.com"
              target="_blank"
              className="text-neutral-100 dark:text-neutral-100 flex items-center lg:text-6xl font-black hover:bg-purple-400 rounded-[30px] px-[10px] py-2 text-4xl"
            >
              <FiMail className="lg:text-6xl lg:mr-48 mr-24 text-4xl" />
              Email
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto w-[710px] h-[710px] bg-neutral-900 rounded-[30px] flex items-center justify-start mb-12">
        <ul className="flex-col space-y-10  my-auto mx-auto">
          <li>
            <Link
              href="https://twitter.com/ATrueDev"
              target="_blank"
              className="text-neutral-500 dark:text-neutral-100 hover:text-neutral-400 dark:hover:text-neutral-500 flex items-center text-6xl font-black bg-purple-500 rounded-[30px] px-[10px] py-2 transition-colors duration-100 ease-in-out"
            >
              <FiTwitter className="text-6xl mr-48  " />
              Twitter
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/ajtruex"
              target="_blank"
              className="text-neutral-500 dark:text-neutral-100 flex items-center text-6xl font-black"
            >
              <FiGithub className="text-6xl mr-48" />
              Github
            </Link>
          </li>
          <li>
            <Link
              href="https://read.cv/truex"
              target="_blank"
              className="text-neutral-500 dark:text-neutral-100 flex items-center text-6xl font-black"
            >
              <Icon
                width={60}
                height={60}
                className="text-neutral-500 dark:text-neutral-100 fill-neutral-500 dark:fill-neutral-100 mr-48"
              />
              read.cv
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/ajtruex/"
              target="_blank"
              className="text-neutral-500 dark:text-neutral-100 flex items-center text-6xl font-black"
            >
              <FiLinkedin className="text-6xl mr-48" />
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href="https://dev.to/truex"
              target="_blank"
              className="text-neutral-500 dark:text-neutral-100 flex items-center text-6xl font-black"
            >
              <FaDev className="text-6xl mr-48" />
              Dev.to
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/atruedev/"
              target="_blank"
              className="text-neutral-500 dark:text-neutral-100 flex items-center text-6xl font-black"
            >
              <FiInstagram className="text-6xl mr-48" />
              Instagram
            </Link>
          </li>
          <li>
            <Link
              href="mailto:andrewtruex@gmail.com"
              target="_blank"
              className="text-neutral-500 dark:text-neutral-100 flex items-center text-6xl font-black"
            >
              <FiMail className="text-6xl mr-48" />
              Email
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  )
}

export default Contact
