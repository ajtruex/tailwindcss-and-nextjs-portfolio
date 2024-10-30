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
    dateadded: "08.23.2024 10:35PM",
    size: "1GB",
    kind: "FOLDER",
    children: [
      {
        name: "KANYE WEST - GRAMMYS Hey mama.MP4",
        dateadded: "08.23.2024 10:35PM",
        size: "1GB",
        kind: "VIDEO",
        url: "https://d34073qwlt06j3.cloudfront.net/KanyeWestPerformsStrongerAndHeyMama.mp4",
      },
      {
        name: "DAFT PUNK - ALIVE 2007 WIRELESS 02.MP4",
        dateadded: "08.23.2024 10:35PM",
        size: "1GB",
        kind: "VIDEO",
        url: "https://d34073qwlt06j3.cloudfront.net/Daft_Punk-Alive_2007_Wireless_O2.mp4",
      },
      {
        name: "KANYE RAPPING TO HIS MOM.MP4",
        dateadded: "08.28.2024 8:35PM",
        size: "16MB",
        kind: "VIDEO",
        url: "https://res.cloudinary.com/ajtruex/video/upload/q_auto:best/v1696464400/rapisreligion2023-08-21__021616.mp4",
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

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-4xl">
        <div className="flex justify-between items-center mb-4 ">
          <h2 className="text-xl font-semibold">{file.name}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="bg-black rounded-lg aspect-video flex items-center justify-center">
          {file.kind === "AUDIO" ? (
            <audio controls className="w-full">
              <source src={`/placeholder.mp3`} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          ) : (
            <video controls className="rounded-xl" autoPlay>
              <source src={file.url} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="mt-4 text-sm text-gray-400 opacity-75">
          <p>Date Added: {file.dateadded}</p>
          <p>Size: {file.size}</p>
          <p>kind: {file.kind}</p>
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
              : "ml-2 text-ellipsis truncate  text-sm col-start-2 col-span-2"
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
    </div>
  )
}
