import Dashboard from "@/components/Dashboard"

export const metadata = {
  title: "Now",
  icons: {
    icon: "/laptop_infrared_2.ico",
  },
}

export default function Now() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <div className="mt-12">
        <Dashboard />
      </div>
    </div>
  )
}
