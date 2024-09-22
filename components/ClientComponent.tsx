"use client"
import { usePathname } from "next/navigation"

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const containerClass =
    pathname === "/inspo"
      ? ""
      : "flex-col justify-center max-w-5xl px-5 py-8 mx-auto align-center xl:px-0"

  return <div className={containerClass}>{children}</div>
}
