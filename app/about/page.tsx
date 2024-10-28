import React from "react"
import AboutSection from "@/components/AboutSection"

export const metadata = {
  title: "About",
  icons: {
    icon: "/help.ico",
  },
}

const About = () => {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <AboutSection />
    </div>
  )
}

export default About
