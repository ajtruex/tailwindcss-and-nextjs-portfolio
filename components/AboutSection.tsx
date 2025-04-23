"use client"
import React from "react"
import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll/modules"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Vue.js" },
  { skill: "Python" },
  { skill: "Git" },
  { skill: "Vercel" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12  md:pt-16 ">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-gradient-to-r from-indigo-500    to-fuchsia-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2 mx-auto text-center text-pretty">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-center">
              Get to know me
            </h1>
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
            <br />
            <h2 className="font-bold text-xl text-center">What Drives Me</h2>
            <br />
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
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-center">
              {skills.map((item, idx) => {
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
                  <div
                    key={idx}
                    className={`
                      relative inline-block p-[1px] rounded-md mr-2 mt-3
                      bg-gradient-to-r ${gradientClass}
                      hover:animate-gradient-move
                      [background-size:200%_200%]
                    `}
                  >
                    <div className="px-4 py-2 bg-white dark:bg-zinc-950 rounded-md font-normal">
                      {item.skill}
                    </div>
                  </div>
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
