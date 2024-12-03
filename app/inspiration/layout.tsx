import localFont from "next/font/local"
const seasons = localFont({
  // src: "../fonts/circularstd-regular.ttf",
  src: [
    {
      path: "../../fonts/The Seasons.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/The Seasons Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-seasons",
})
const garamond = localFont({
  src: [
    {
      path: "../../fonts/AppleGaramond.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/AppleGaramond-Light.ttf",
      weight: "300",
      style: "light",
    },
    {
      path: "../../fonts/AppleGaramond-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-garamond",
})

const gtsuperdisplay = localFont({
  src: [
    {
      path: "../../fonts/GT Super Display.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/GT Super Display Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-gtsuperdisplay",
})

const neuemachina = localFont({
  src: [
    {
      // path: "@/fonts/NeueMachina-Regular.otf",
      path: "../../fonts/NeueMachina-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/NeueMachina-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/NeueMachina-Ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],

  display: "swap",
  variable: "--font-neuemachina",
})

export const metadata = {
  title: "Inspiration",
  icons: {
    icon: "/world.ico",
  },
}

export default function InspoLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section
      className={`${seasons.variable} ${garamond.variable}
      ${gtsuperdisplay.variable} ${neuemachina.variable} antialiased`}
    >
      {children}
    </section>
  )
}
