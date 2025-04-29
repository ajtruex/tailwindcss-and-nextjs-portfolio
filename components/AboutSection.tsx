"use client"
import React from "react"
import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll/modules"
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiVercel,
  SiJavascript,
  SiPython,
  SiHtml5,
  SiGit,
  SiCss3,
  SiVuedotjs,
} from "react-icons/si"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { motion } from "framer-motion"

const skills = [
  { skill: "HTML", icon: SiHtml5 },
  { skill: "CSS", icon: SiCss3 },
  { skill: "JavaScript", icon: SiJavascript },
  { skill: "TypeScript", icon: SiTypescript },
  { skill: "Node.js", icon: SiNodedotjs },
  { skill: "React", icon: SiReact },
  { skill: "Next.js", icon: SiNextdotjs },
  { skill: "Tailwind CSS", icon: SiTailwindcss },
  { skill: "Vue.js", icon: SiVuedotjs },
  { skill: "Python", icon: SiPython },
  { skill: "Git", icon: SiGit },
  { skill: "Vercel", icon: SiVercel },
]

const SkillIcon = ({ icon: Icon, skill, className }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="items-center justify-center flex"
        >
          <Icon className="w-6 h-6 mr-1" />
          {skill}
        </motion.div>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        className="bg-secondary text-secondary-foreground"
      >
        <p>{skill}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

const AboutSection = () => {
  return (
    <section id="about">
      <div className="mt-12">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-indigo-500    to-fuchsia-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 mx-auto text-center text-pretty">
            <div className="text-center text-2xl font-bold mb-6 md:text-center">
              Get to know me
            </div>
            <p className="leading-snug">
              I am a Web Developer and Software Engineer, passionate about
              creating meaningful digital experiences. Since my first encounter
              with programming, I have been fascinated by the power to transform
              ideas into reality using creativity and software. Engineering and
              software development carry on the legacy of inventors who reshaped
              the world with daring ideas.
            </p>
            <br />
            <p className="leading-snug">
              My focus lies in creating intuitive and engaging digital
              experiences at the intersection of technology and art. Inspired by
              film, culture, and humor, I design web experiences that combine
              visual appeal with functionality, focusing on intuitive interfaces
              and seamless interactions.My focus lies in creating intuitive and
              engaging digital experiences at the intersection of technology and
              art. Inspired by film, culture, and humor, I design web
              experiences that combine visual appeal with functionality,
              focusing on intuitive interfaces and seamless interactions.
            </p>

            <div className="text-center text-2xl font-bold mb-6 mt-12 md:text-center">
              What Drives Me
            </div>

            <ul className="list-none text-start text-wrap">
              <li>
                <span className="font-bold">A thirst for knowledge:</span> My
                desire to learn anything that will improve my web development
                skills is the driving force behind my work.
              </li>
              <li>
                <span className="font-bold">Technological Advancement:</span> I
                love being on the bleeding edge of technology.
              </li>
              <li>
                <span className="font-bold">Search for original ideas:</span> I
                believe technology advances through the identification and
                development of original ideas.
              </li>
            </ul>
            <br />
          </div>
          <div className="text-center md:w-1/2 md:text-center">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>

            <div className="flex flex-wrap justify-center z-10  md:justify-center  ">
              {skills.map(({ skill, icon }, idx) => {
                // Array of Tailwind three-color gradient combinations
                const gradients = [
                  "from-purple-600 via-pink-600 to-blue-600",
                  "from-emerald-600 via-yellow-400 to-red-600",
                  "from-blue-600 via-violet-600 to-orange-500",
                  "from-rose-600 via-cyan-500 to-emerald-600",
                  "from-amber-500 via-violet-600 to-cyan-600",
                  "from-green-500 via-fuchsia-600 to-orange-500",
                  "from-indigo-600 via-red-600 to-yellow-500",
                  "from-blue-600 via-amber-500 to-purple-600",
                  "from-pink-600 via-emerald-500 to-indigo-600",
                  "from-violet-600 via-orange-500 to-cyan-600",
                  "from-red-600 via-blue-600 to-green-500",
                ]
                const gradientClass = gradients[idx % gradients.length]

                return (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={idx}
                    className={`
                      flex p-[1px] rounded-md mr-[6px] mt-2
                      bg-gradient-to-r ${gradientClass}
                      animate-gradient-move
                      [background-size:200%_200%]
                    `}
                  >
                    <div className="flex flex-grow px-2 py-2 bg-white dark:bg-zinc-800 rounded-md text-base items-center">
                      <SkillIcon icon={icon} skill={skill} />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
