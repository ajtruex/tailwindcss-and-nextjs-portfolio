import localFont from "next/font/local"

const local = localFont({
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
})

export const metadata = {
  title: "Inspiration",
  icons: {
    icon: "/inspo.ico",
  },
}

export default function InspirationLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <main className=" flex justify-center items-center mx-auto">
      <section className={`${local.className} antialiased`}>{children}</section>
    </main>
  )
}
