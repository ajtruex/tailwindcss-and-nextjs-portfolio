"use client"

import * as React from "react"
import {
  Home,
  CircleUser,
  AppWindowMac,
  Headphones,
  Code,
  User,
  Zap,
  Lightbulb,
  Activity,
} from "lucide-react"

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import Link from "next/link"
// const CommandMenu = () => {
//   const [open, setOpen] = React.useState(false)

//   // Toggle the menu when ⌘K is pressed
//   React.useEffect(() => {
//     const down = (e: KeyboardEvent) => {
//       if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
//         e.preventDefault()
//         setOpen((open) => !open)
//       }
//     }

//     document.addEventListener("keydown", down)
//     return () => document.removeEventListener("keydown", down)
//   }, [])

export default function CommandMenu({ open, setOpen }) {
  // const [open, setOpen] = React.useState(false)

  const [value, setValue] = React.useState("")

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    // <>
    //   <p className="text-sm text-muted-foreground">
    //     Press{" "}
    //     <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
    //       <span className="text-xs">⌘</span>K
    //     </kbd>
    //   </p>
    <Command loop value={value} onValueChange={setValue}>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem
              onSelect={() => window.open("/", "_self")}
              className="hover:cursor-pointer"
            >
              <Home className="mr-2" />
              <span>Home</span>
            </CommandItem>

            <CommandItem
              onSelect={(value) => {
                window.open(value, "_self")
              }}
              className="hover:cursor-pointer"
            >
              <CircleUser className="mr-2" />

              <span>About</span>
            </CommandItem>
            <CommandItem
              key={"projects"}
              onSelect={(value) => {
                window.open(value, "_self")
              }}
              className="hover:cursor-pointer"
            >
              <Code className="mr-2" />
              <span>Projects</span>
            </CommandItem>

            <CommandItem
              onSelect={(value) => {
                window.open(value, "_self")
              }}
              className="hover:cursor-pointer"
            >
              <AppWindowMac className="mr-2" />
              <span>Stack</span>
            </CommandItem>
            <CommandItem
              onSelect={(value) => {
                window.open(value, "_self")
              }}
              className="hover:cursor-pointer"
            >
              <User className="mr-2" />
              <span>Contact</span>
            </CommandItem>
            <CommandSeparator />
            <CommandItem
              onSelect={(value) => {
                window.open(value, "_self")
              }}
              className="hover:cursor-pointer"
            >
              <Headphones className="mr-2" />
              <span>Spotify</span>
            </CommandItem>
            <CommandItem
              onSelect={(value) => {
                window.open(value, "_self")
              }}
              className="hover:cursor-pointer"
            >
              <Lightbulb className="mr-2" />
              <span>Inspiration</span>
            </CommandItem>
            <CommandItem
              onSelect={(value) => {
                window.open(value, "_self")
              }}
              className="hover:cursor-pointer"
            >
              <Activity className="mr-2" />
              <span>Dashboard</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </Command>
    // </>
  )
}

// export default CommandMenu
