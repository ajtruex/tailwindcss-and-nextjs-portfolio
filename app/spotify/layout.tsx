import localFont from "next/font/local"
const circular = localFont({
  // src: "../fonts/circularstd-regular.ttf",
  src: [
    {
      path: "../../fonts/circularstd-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/CircularStd-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/CircularStd-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/CircularSpUIv3T-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-circular",
})

export const metadata = {
  title: "Spotify",
  icons: {
    icon: "/sound.ico",
  },
}

export default function SpotifyLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`${circular.variable} antialiased`}>{children}</section>
  )
}
