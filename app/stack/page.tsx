import React from "react"
import Image from "next/image"
import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export const metadata = {
  title: "Stack",
  icons: {
    icon: "/happy-mac.ico",
  },
}

const STACK_ITEMS = [
  {
    name: "Raycast",
    image: "/raycast-logo.png",
    link: "https://raycast.com/",
    stub: "raycast",
    description: "The ultimate productivity tool for developers.",
  },
  {
    name: "Obsidian",
    image: "/obsidian-logo.svg",
    link: "https://obsidian.md/",
    stub: "obsidian",
    description:
      "A powerful knowledge base that works on top of a local folder of plain text Markdown files.",
  },
  {
    name: "VS Code",
    image: "/vscode-logo.png",
    link: "https://code.visualstudio.com/",
    stub: "vscode",
    description:
      "A lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux.",
  },
  {
    name: "Spotify",
    image: "/spotify-logo.png",
    link: "https://www.spotify.com/",
    stub: "spotify",
    description:
      "A digital music service that gives you access to millions of songs.",
  },
  {
    name: "iTerm2",
    image: "/iterm-logo.png",
    link: "https://iterm2.com/",
    stub: "iterm2",
    description:
      "A terminal emulator for macOS that does amazing things with text.",
  },
  {
    name: "Maccy",
    image: "/maccy-logo.png",
    link: "https://maccy.app/",
    stub: "maccy",
    description: "A clipboard manager for macOS.",
  },
  {
    name: "CleanShot X",
    image: "/cleanshot-logo.png",
    link: "https://cleanshot.com/",
    stub: "cleanshot",
    description: "The best screenshot app for macOS.",
  },
  {
    name: "Figma",
    image: "/figma-logo.png",
    link: "https://www.figma.com/",
    stub: "figma",
    description: "The collaborative interface design tool.",
  },
  {
    name: "IINA",
    image: "/iina-logo.png",
    link: "https://iina.io/",
    stub: "iina",
    description: "The modern media player for macOS.",
  },
  {
    name: "Omnivore",
    image: "/omnivore-logo.png",
    link: "https://omnivore.app/",
    stub: "omnivore",
    description:
      "The free, open source, read-it-later app for serious readers.",
  },
]

const TECH_STACK = [
  {
    name: "Next.js",
    image: "/nextjs-logo.png",
    link: "https://nextjs.org/",
    stub: "nextjs",
    description: "The React Framework – created and maintained by Vercel.",
  },
  {
    name: "Tailwind CSS",
    image: "/tailwindlabs.png",
    link: "https://tailwindcss.com/",
    stub: "tailwindlabs",
    description: "A utility-first CSS framework for rapid UI development.",
  },
  {
    name: "Vercel",
    image: "/vercel-logo.png",
    link: "https://vercel.com/",
    stub: "vercel",
    description:
      "Build and deploy the best web experiences with the Frontend Cloud.",
  },
]

const Stack = () => {
  return (
    <div className="mt-20  flex flex-col justify-center md:px-5 lg:mt-32">
      <div className="flex flex-col items-start space-y-5 md:px-5">
        <h1 className="text-5xl font-bold mb-2">Apps</h1>
        <h4 className="text-2xl font-semibold text-[#888888]">
          Software I use
        </h4>
      </div>
      <div className="mt-10 grid gap-10 justify-items-center md:justify-items-start md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-x-10 lg:gap-y-10">
        {STACK_ITEMS.map((item, idx) => {
          return (
            <div
              key={idx}
              className="group flex cursor-pointer flex-col rounded-2xl bg-[#111111] dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 w-[200px] md:w-full"
            >
              <HoverCard openDelay={400}>
                <HoverCardTrigger asChild>
                  <Link
                    href={item.link}
                    key={idx}
                    target="_blank"
                    className="group flex cursor-pointer flex-col space-y-5 rounded-2xl bg-[#111111] p-5 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 w-[200px] md:w-full"
                  >
                    <Image
                      src={item.image}
                      // src={`https://github.com/${item.stub}.png`}
                      alt={item.name}
                      width={120}
                      height={70}
                      className="transform self-center border-none text-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 "
                    />
                    <div className="flex flex-col items-center space-y-2">
                      <h3 className="font-medium text-lg text-white">
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 rounded-2xl">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage src={item.image} />
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-sm">{item.description}</p>

                      {/* <div className="flex flex-col items-start space-y-2">
                        <h3 className="font-medium text-lg text-white">
                          {item.name}
                        </h3>
                      </div> */}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col items-start space-y-5 md:px-5 mt-40 lg:mt-32">
        <h1 className="text-5xl font-bold mb-2">Tech Stack</h1>
        <h4 className="text-2xl font-semibold text-[#888888]">
          Tools I use to build
        </h4>
      </div>
      <div className="mt-10 grid gap-10 justify-items-center md:justify-items-start md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-x-10 lg:gap-y-10">
        {TECH_STACK.map((item, idx) => {
          return (
            <div
              key={idx}
              className="group flex cursor-pointer flex-col rounded-2xl bg-[#111111] dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 w-[200px] md:w-full"
            >
              <HoverCard openDelay={400}>
                <HoverCardTrigger asChild>
                  <Link
                    href={item.link}
                    key={idx}
                    target="_blank"
                    className="group flex cursor-pointer flex-col space-y-5 rounded-2xl bg-[#111111] p-5 dark:bg-gradient-to-r dark:from-neutral-800 dark:to-zinc-800 w-[200px] md:w-full"
                  >
                    <Image
                      src={item.image}
                      // src={`https://github.com/${item.stub}.png`}
                      alt={item.name}
                      width={120}
                      height={70}
                      className="transform self-center border-none text-black transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 "
                    />
                    <div className="flex flex-col items-center space-y-2">
                      <h3 className="font-medium text-lg text-white">
                        {item.name}
                      </h3>
                    </div>
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 rounded-2xl">
                  <div className="flex justify-between space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={`https://github.com/${item.stub}.png`}
                      />
                    </Avatar>
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold">{item.name}</h4>
                      <p className="text-sm">{item.description}</p>

                      {/* <div className="flex flex-col items-start space-y-2">
                        <h3 className="font-medium text-lg text-white">
                          {item.name}
                        </h3>
                      </div> */}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          )
        })}
      </div>
      {/* <div className="flex justify-between">
        <div className="text-center">
          <h3 className="text-4xl font-bold border-b-4 pb-2">Setup</h3>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold border-b-4 pb-2">Coding</h3>
        </div>
      </div> */}
      <div className="mt-40 lg:mt-32 grid grid-cols-2 gap-10">
        <div className="text-center">
          <h3 className="text-4xl font-bold pb-2">Setup</h3>
          <h4 className="md:text-lg text-base font-normal text-[#888888] pb-2">
            Gear and workspace stuff I use
          </h4>
          <hr className="h-1 dark:bg-white bg-black border-0" />
          {/* <div className="mt-10 grid gap-10 justify-items-center md:justify-items-start md:grid-cols-3 lg:grid-cols-4 md:gap-5 lg:gap-x-10 lg:gap-y-10"> */}
          <div className="text-base font-semibold mt-2 text-left">
            <Link
              href="https://amzn.to/3pLQuGA"
              target="_blank"
              className="flex flex-row hover:text-[#9f82ff] py-2.5"
            >
              Laptop: 13&quot; MacBook Pro Retina (Early 2015)
            </Link>
            <Link
              href="https://amzn.to/3OiuoFr"
              target="_blank"
              className="flex flex-row text-left hover:text-[#9f82ff] py-2.5"
            >
              Monitor: HP Pavilion 22cw 21.5&quot; IPS LED Backlit Monitor
            </Link>
            <Link
              href="https://www.logitech.com/en-us/product/mk850-wireless-keyboard-mouse-combo?crid=1759#specification-tabular"
              target="_blank"
              className="flex flex-row text-left hover:text-[#9f82ff] py-2.5"
            >
              Mouse + Keyboard: Logitech MK850
            </Link>
            <Link
              href="https://amzn.to/3JThwmt"
              target="_blank"
              className="flex flex-row text-left hover:text-[#9f82ff] py-2.5"
            >
              External Hard Drive: WD My Passport Ultra 1TB
            </Link>
            <Link
              href="https://amzn.to/44jyqTo"
              target="_blank"
              className="flex flex-row text-left hover:text-[#9f82ff] py-2.5"
            >
              Apple AirPods (2nd Generation)
            </Link>
            <Link
              href="https://amzn.to/44l7frc"
              target="_blank"
              className="flex flex-row text-left hover:text-[#9f82ff] py-2.5"
            >
              Apple iPhone 13 Pro Max
            </Link>
          </div>
        </div>
        <div className="text-center">
          <h3 className="text-4xl font-bold pb-2">Coding</h3>
          <h4 className="md:text-lg text-base font-normal text-[#888888] pb-2">
            Editor and Terminal things I use
          </h4>
          <hr className="h-1 dark:bg-white bg-black border-0" />
          <div className="text-base font-semibold mt-2 text-start">
            <Link
              href="https://gist.github.com/ajtruex/fe71a59b7c919827c9c26e118caa6f32"
              target="_blank"
              className="hover:text-[#9f82ff] flex flex-row  py-2.5"
            >
              Editor: VSCode (Settings/Extensions)
            </Link>

            <Link
              href="https://marketplace.visualstudio.com/items?itemName=TruBoo.truboo"
              target="_blank"
              className="flex flex-row hover:text-[#9f82ff] py-2.5"
            >
              Theme: TruBoo
            </Link>
            <Link
              href="https://iterm2.com/"
              target="_blank"
              className="flex flex-row hover:text-[#9f82ff] py-2.5"
            >
              Terminal: iTerm2
            </Link>
            <Link
              href="https://ohmyz.sh/"
              target="_blank"
              className="flex flex-row hover:text-[#9f82ff] py-2.5"
            >
              Shell: Oh My Zsh
            </Link>
            <Link
              href="https://brew.sh/"
              target="_blank"
              className="flex flex-row hover:text-[#9f82ff] py-2.5"
            >
              Package Manager: Homebrew
            </Link>
            <Link
              href="https://www.google.com/chrome/"
              target="_blank"
              className="flex flex-row hover:text-[#9f82ff] py-2.5"
            >
              Browser + Dev Tools: Google Chrome
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mt-12 m-auto grid gap-5 lg:grid-cols-2 lg:gap-10">
        <div className="group flex cursor-pointer flex-row items-center justify-between space-x-5 rounded-2xl transition duration-300 ease-out md:px-5">
          <h3 className="line-clamp-1 transition duration-300 group-hover:text-secondary text-4xl font-bold border-b-4 pb-2">
            Setup
          </h3>
          <hr className="flex-grow origin-left transform border-t transition-all duration-500 ease-in-out group-hover:scale-x-100 group-hover:animate-progress-bar  dark:border-slate-100/10 dark:group-hover:border-gray-100/30" />
          <h3 className="line-clamp-1 transition duration-300 group-hover:text-secondary text-4xl font-bold border-b-4 pb-2">
            Coding
          </h3>
        </div>
      </div> */}
    </div>
  )
}

export default Stack
