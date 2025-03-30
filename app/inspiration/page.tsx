import VideoHero from "@/components/VideoHero"
import { Card } from "@/components/ui/card"

export default function Inspiration() {
  return (
    <div className="items-center mx-auto ">
      <div className="hidden sm:flex">
        <VideoHero />
      </div>
      <h1 className="text-6xl sm:text-9xl text-center mt-12 font-garamond mb-12 sm:hidden">
        Inspiration
      </h1>
      <Card className="w-auto flex rounded-xl hover:border-zinc-900/20 transition-colors cursor-pointer dark:hover:border-zinc-50/20 outline outline-1 outline-[#ffffff24] outline-offset-[8px] mb-12 sm:hidden">
        <video
          controls
          poster="https://d34073qwlt06j3.cloudfront.net/mac-miller-npr-poster-fill.webp"
          className="rounded-xl object-cover"
        >
          <source
            src="https://d34073qwlt06j3.cloudfront.net/Mac-Miller-NPR-Music-Tiny-Desk-Concert.mp4"
            type="video/mp4"
          />
        </video>
      </Card>

      <Card className="w-auto flex rounded-xl hover:border-zinc-900/20 transition-colors cursor-pointer dark:hover:border-zinc-50/20 outline outline-1 dark:outline-[#ffffff24] outline-[#00000014] outline-offset-8">
        <video
          controls
          poster="https://d34073qwlt06j3.cloudfront.net/Bo-Burnham.webp"
          className="rounded-xl"
        >
          <source
            src="https://d34073qwlt06j3.cloudfront.net/Bo-Burnham-Cant-Handle-This.mp4"
            type="video/mp4"
          />
        </video>
      </Card>
      {/* <video
        controls
        poster="/kanye-poster.png"
        className="rounded-xl -rotate-6 my-12 mb-20 sm:mb-0"
      >
        <source
          src="https://player.odycdn.com/v6/streams/62736b213f015ac31d27ab57f66355d6b583ac94/91435b"
          type="video/mp4"
        />
      </video> */}
      <div className="flex flex-col my-12 sm:mt-12">
        <h1 className="text-5xl md:text-8xl font-bold items-end text-end justify-end  tracking-tight font-seasons">
          Memento Mori
        </h1>
        <p className="text-xl md:text-3xl dark:text-neutral-400 text-neutral-500 mr-4 md:mr-[104px] items-end text-end justify-end tracking-tight font-seasons">
          &quot;remember that you have to die&quot;
        </p>
      </div>
      <div className="flex sm:flex-row flex-col md:space-x-12 sm:space-x-8">
        <div className="flex flex-col  h-auto w-fit">
          <Card className="w-auto sm:w-full sm:h-fit flex flex-col rounded-xl hover:border-zinc-900/20 transition-colors cursor-pointer dark:hover:border-zinc-50/20 outline outline-1 dark:outline-[#ffffff24]  outline-[#00000014] outline-offset-8  mb-12">
            <video
              controls
              poster="https://d34073qwlt06j3.cloudfront.net/seth-rogen-inspo.webp"
              className="rounded-xl"
            >
              <source
                src="https://d34073qwlt06j3.cloudfront.net/seth-rogen-inspo.mp4"
                type="video/mp4"
              />
            </video>
          </Card>
        </div>
        <div className="flex flex-col justify-between  md:space-y-20 sm:my-2 space-y-12  sm:w-fit sm:h-fit">
          <Card className="w-auto flex dark:border-[#ffffff24] rounded-xl hover:border-zinc-900/20 transition-colors md:rotate-1 hover:md:rotate-0 cursor-pointer dark:hover:border-zinc-50/20 outline outline-1 dark:outline-[#ffffff24] outline-[#00000014] outline-offset-8 ">
            <video
              controls
              poster="https://d34073qwlt06j3.cloudfront.net/Bo-Burnham-Art-is-Dead.webp"
              className="rounded-xl"
            >
              <source
                src="https://d34073qwlt06j3.cloudfront.net/Bo-Burnham-Art-is-Dead.mp4"
                type="video/mp4"
              />
            </video>
          </Card>
          <Card className="w-auto flex rounded-xl hover:border-zinc-900/20 transition-colors md:-rotate-1 hover:md:rotate-0 cursor-pointer dark:hover:border-zinc-50/20 outline outline-1 dark:outline-[#ffffff24] outline-[#00000014] outline-offset-8">
            <video
              controls
              poster="https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.webp"
              className="rounded-xl"
            >
              <source
                src="https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.mp4"
                type="video/mp4"
              />
            </video>
          </Card>
        </div>
      </div>
      <Card className="w-auto flex rounded-xl hover:border-zinc-900/20 transition-colors cursor-pointer dark:hover:border-zinc-50/20 outline outline-1 dark:outline-[#ffffff24] outline-[#00000014] outline-offset-8 mt-12 ">
        <video
          controls
          poster="https://d34073qwlt06j3.cloudfront.net/daft-punk-poster.webp"
          className="rounded-xl"
        >
          <source
            src="https://d34073qwlt06j3.cloudfront.net/Daft_Punk-Alive_2007_Wireless_O2.mp4"
            type="video/mp4"
          />
        </video>
      </Card>
    </div>
  )
}
