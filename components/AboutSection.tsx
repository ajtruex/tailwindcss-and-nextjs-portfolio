"use client"
import React from "react"
import { HiArrowDown } from "react-icons/hi"
import { Link } from "react-scroll/modules"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "Vue.js" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 ">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col md:flex-row space-y-10 items-stretch justify-center align-top md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-center">
              Get to know me
            </h1>
            <p>
              I am passionate about the intersection of technology and art. I
              believe that by combining the best of both worlds, we can create
              truly groundbreaking software and web experiences that are both
              aesthetically pleasing and functionally innovative.
            </p>
            <br />
            <p>
              My mission is to create software that not only functions
              seamlessly but also evokes emotions and leaves a lasting
              impression. I love creating software that makes people feel
              something.
            </p>
            <br />
            <h2 className="font-bold text-xl text-center">What Drives Me</h2>
            <br />
            <ul className="list-disc">
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
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold"
                  >
                    {item.skill}
                  </p>
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
