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
  return <section>{children}</section>
}
