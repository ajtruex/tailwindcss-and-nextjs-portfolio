import FileTree from "@/components/FileTree"

export default function Page() {
  return (
    <div className="flex flex-col w-max items-center justify-center h-full space-y-4 py-8 font-neuemachina">
      {/* <h1 className="text-4xl font-bold">Inspiration</h1> */}
      <FileTree />
    </div>
  )
}
