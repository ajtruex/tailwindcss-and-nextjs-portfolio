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
    <div className="mx-auto px-6 sm:px-4">
      <AboutSection />
    </div>
  )
}

export default About
