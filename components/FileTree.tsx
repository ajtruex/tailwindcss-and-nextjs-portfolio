"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronDown,
  Folder,
  FileAudio,
  FileVideo,
  Download,
  X,
  Camera,
  FileText,
} from "lucide-react"
import Image from "next/image"

// type FileType = {
//   name: string
//   dateadded: string
//   size: string
//   kind: "FOLDER" | "AUDIO" | "VIDEO"
//   children?: FileType[]
// }

const files = [
  {
    name: "VIDEO",
    dateadded: "10.10.2023 08:08PM",
    size: "2.53GB",
    kind: "FOLDER",
    children: [
      {
        name: "KANYE WEST - GRAMMYS Hey mama.MP4",
        dateadded: "10.10.2023 08:08PM",
        size: "354.8MB",
        kind: "VIDEO",
        url: "https://d34073qwlt06j3.cloudfront.net/KanyeWestPerformsStrongerAndHeyMama.mp4",
      },
      {
        name: "DAFT PUNK - ALIVE 2007 WIRELESS 02.MP4",
        dateadded: "07.03.2024 09:37PM",
        size: "1.8GB",
        kind: "VIDEO",
        url: "https://d34073qwlt06j3.cloudfront.net/Daft_Punk-Alive_2007_Wireless_O2.mp4",
      },
      {
        name: "MAC MILLER - NPR Tiny Desk Concert.MP4",
        dateadded: "10.29.2024 07:24PM",
        size: "375.7MB",
        kind: "VIDEO",
        url: "https://d34073qwlt06j3.cloudfront.net/Mac-Miller-NPR-Music-Tiny-Desk-Concert.mp4",
      },
      {
        name: "CHRIS COLE - NEW BLOOD.MP4",
        dateadded: "10.10.2023 08:29PM",
        size: "754.7MB",
        kind: "VIDEO",
        url: "https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.mp4",
      },
    ],
  },
  {
    name: "AUDIO",
    dateadded: "10.10.2023 08:08PM",
    size: "354.8MB",
    kind: "FOLDER",
    children: [
      {
        name: "KANYE WEST - GRAMMYS Hey mama.MP3",
        dateadded: "10.10.2023 08:08PM",
        size: "354.8MB",
        kind: "AUDIO",
        url: "https://d34073qwlt06j3.cloudfront.net/KanyeWestPerformsStrongerAndHeyMama.mp3",
      },
    ],
  },

  {
    name: "IMAGE",
    dateadded: "12.02.2024 06:52PM",
    size: "274.62KB",
    kind: "FOLDER",
    children: [
      {
        name: "VCR_WireframeHand.jpg",
        dateadded: "12.02.2024 06:52PM",
        size: "274.62KB",
        kind: "IMAGE",
        url: "https://images.beta.cosmos.so/801ed0ac-1770-4893-954a-f5f22c9496ef.?format=jpeg",
      },
    ],
  },
]

const FileIcon = ({ kind }) => {
  switch (kind) {
    case "FOLDER":
      return <Folder className="w-4 h-4 text-gray-400" />
    case "AUDIO":
      return <FileAudio className="w-4 h-4 text-gray-400" />
    case "VIDEO":
      return <FileVideo className="w-4 h-4 text-gray-400" />
    case "IMAGE":
      return <Camera className="w-4 h-4 text-gray-400" />
    case "TEXT":
      return <FileText className="w-4 h-4 text-gray-400" />
    default:
      return null
  }
}

const MediaWindow = ({ file, onClose }) => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      onClose(file)
    }
  })
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => onClose(file)}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-xl font-semibold uppercase">{file.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-black rounded-2xl aspect-video flex items-center justify-center">
          {file.kind === "AUDIO" ? (
            <audio controls className="w-full">
              <source src={`/placeholder.mp3`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : file.kind === "IMAGE" ? (
            <div className="size-full overflow-hidden isolate z-[1] relative rounded-xl hover:border-zinc-900/20 transition-colors cursor-pointer dark:hover:border-zinc-50/20 outline outline-1 outline-[#ffffff24] outline-offset-[8px]">
              <Image
                src={file.url}
                alt={file.name}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
          ) : (
            <div className="size-full  overflow-hidden isolate z-[1] relative rounded-xl hover:border-zinc-900/20 transition-colors cursor-pointer dark:hover:border-zinc-50/20 outline outline-1 outline-[#ffffff24] outline-offset-[8px] ">
              <iframe
                src={file.url}
                className="size-full rounded-2xl"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
            // <video controls className="rounded-xl" autoPlay>
            //   <source src={file.url} type="video/mp4" />
            // </video>
          )}
        </div>
        <div className="mt-4 text-sm text-white opacity-90 font-extrabold">
          <p>DATE ADDED: {file.dateadded}</p>
          <p>SIZE: {file.size}</p>
          <p>KIND: {file.kind}</p>
        </div>
      </div>
    </motion.div>
  )
}

const FileTreeItem = ({ file, onSelect, depth = 0 }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = () => {
    if (file.kind === "FOLDER") {
      setIsOpen(!isOpen)
    } else {
      onSelect(file)
    }
  }

  return (
    <>
      <div
        className={`grid grid-cols-[auto_auto_1fr_1fr_1fr_1fr] place-items-center justify-items-start  py-2 px-4 hover:bg-gray-800 cursor-pointer`}
        style={{ paddingLeft: `${depth * 1.5 + 1}rem` }}
        onClick={handleClick}
      >
        <div className="flex  col-start-1">
          {file.children && (
            <ChevronDown
              className={`w-4 h-4 mr-2 transition-transform duration-200 ${
                isOpen ? "transform rotate-0" : "transform -rotate-90"
              }`}
            />
          )}
          <span className="w-4 h-4 mb-1">
            <FileIcon kind={file.kind} />
          </span>
        </div>
        <span
          className={
            file.kind === "FOLDER"
              ? "font-bold ml-5  text-center mx-2 text-base col-start-2 col-span-2"
              : "ml-2 text-ellipsis truncate  text-sm col-start-2 col-span-2 uppercase"
          }
          // className="ml-1 text-ellipsis truncate  w-[225px] text-center mx-2 text-xs col-start-2 "
        >
          {file.name}
        </span>
        <span className="text-white text-[12px] mx-auto col-start-4 rounded-[5px] bg-neutral-800 py-[.25rem] px-[.45rem]  h-[25px]">
          {file.dateadded}
        </span>
        <span className="text-gray-500 text-sm col-start-5 mx-auto">
          {file.size}
        </span>
        <span className="text-gray-500 text-sm col-start-6 mx-auto">
          {file.kind}
        </span>
        {/* {file.kind !== "FOLDER" && (
          <button className="text-blue-500 hover:text-blue-400 justify-self-center col-start-6">
            <Download className="w-4 h-4" />
          </button>
        )} */}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && file.children && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="ml-4"
          >
            {file.children.map((child) => (
              <FileTreeItem
                key={child.name}
                file={child}
                onSelect={onSelect}
                depth={depth + 1}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default function FileTree() {
  const [selectedFile, setSelectedFile] = useState(null)

  return (
    <div className="bg-zinc-900 text-white min-h-screen max-w-screen-xl mx-auto p-4 rounded-xl w-screen">
      <h1 className="text-7xl font-extrabold mt-6">INSPO</h1>
      <div className="bg-black rounded-lg overflow-hidden">
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr] place-items-center justify-items-center font-semibold text-gray-400 py-2 px-4 border-b">
          {/* <span className="col-start-1"></span> */}
          <span className="col-start-1 ">NAME</span>
          <span className="col-start-2 pl-9">DATE ADDED</span>
          <span className=" mx-auto col-start-3 pl-9">SIZE</span>
          <span className=" mx-auto col-start-4">KIND</span>

          {/* <span className="w-1/7 mx-auto col-start-6">ACTION</span> */}
        </div>
        {files.map((file) => (
          <FileTreeItem
            key={file.name}
            file={file}
            onSelect={setSelectedFile}
          />
        ))}
      </div>
      <AnimatePresence>
        {selectedFile && (
          <>
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setSelectedFile(null)}
            />
            <MediaWindow
              file={selectedFile}
              onClose={() => setSelectedFile(null)}
            />
          </>
        )}
      </AnimatePresence>
      {/* <AnimatePresence>
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedFile(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              // {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0"
            >
              <motion.button className="absolute -top-16 right-0 text-white text-xl bg-neutral-900/50 ring-1 backdrop-blur-md rounded-full p-2 dark:bg-neutral-100/50 dark:text-black">
                <X className="size-5" />
              </motion.button>
              <div className="size-full border-2 border-white rounded-2xl overflow-hidden isolate z-[1] relative">
                <iframe
                  src={selectedFile.url}
                  className="size-full rounded-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
            <div className="mt-4 text-sm text-gray-400 opacity-75">
              <p>Date Added: {selectedFile.dateadded}</p>
              <p>Size: {selectedFile.size}</p>
              <p>kind: {selectedFile.kind}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence> */}
    </div>
  )
}
