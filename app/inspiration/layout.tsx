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
  return <section>{children}</section>
}
