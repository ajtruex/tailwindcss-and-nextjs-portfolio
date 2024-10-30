"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function Component() {
  return (
    <div className="items-center mx-auto space-y-24">
      <h1 className="text-5xl sm:text-9xl text-center mt-12 font-garamond">
        Inspiration
      </h1>
      <div className="relative z-50">
        <video
          controls
          poster="https://d34073qwlt06j3.cloudfront.net/kanye-poster.webp"
          className="rounded-xl my-12 mb-20 sm:mb-0 "
        >
          <source
            src="https://d34073qwlt06j3.cloudfront.net/KanyeWestPerformsStrongerAndHeyMama.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-2 bg-zinc-700/40	" />
        <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-3 bg-zinc-700/30	" />
        <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-4 bg-zinc-700/20	" />
      </div>

      <div className="relative z-50">
        <video
          controls
          poster="https://d34073qwlt06j3.cloudfront.net/mac-miller-npr-poster-rounded.webp"
          className="rounded-xl my-12 mb-20 sm:mb-0"
        >
          <source
            src="https://d34073qwlt06j3.cloudfront.net/Mac-Miller-NPR-Music-Tiny-Desk-Concert.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute -inset-1 border-2 border-violet-500/40 rounded-lg -z-10 translate-y-2 	" />
        <div className="absolute -inset-2 border-2 border-violet-500/30 rounded-lg -z-20 translate-y-4 	" />
        <div className="absolute -inset-3 border-2 border-violet-500/20 rounded-lg -z-30 translate-y-6 	" />
      </div>

      <video
        controls
        poster="https://d34073qwlt06j3.cloudfront.net/mac-miller-npr-poster-rounded.webp"
        className="rounded-xl my-12 mb-20 sm:mb-0"
      >
        <source
          src="https://d34073qwlt06j3.cloudfront.net/Mac-Miller-NPR-Music-Tiny-Desk-Concert.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}
// return (
//   // <div className="min-h-screen bg-neutral-900 ">
//   <div className="container px-4 py-12 mx-auto">
//     <h1 className="text-5xl font-garamond text-center mb-16 text-white">
//       Inspiration
//     </h1>

//     {/* Asymmetric grid with overlapping elements */}
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
//       {/* Featured video - spans 2 columns */}
//       <Card className="relative z-50 md:col-span-2 rounded-xl hover:border-primary/20 transition-colors">
//         <video
//           controls
//           poster="https://d34073qwlt06j3.cloudfront.net/kanye-poster.webp"
//           className="rounded-xl"
//         >
//           <source
//             src="https://d34073qwlt06j3.cloudfront.net/KanyeWestPerformsStrongerAndHeyMama.mp4"
//             type="video/mp4"
//           />
//         </video>
//         <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-2 bg-zinc-900/40	" />
//         <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-3 bg-zinc-900/30	" />
//         <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-4 bg-zinc-900/20	" />
//       </Card>

//       {/* NPR Music video with decorative element */}
//       <Card className="relative z-50 rounded-xl hover:border-primary/20 transition-colors">
//         <video
//           controls
//           poster="https://d34073qwlt06j3.cloudfront.net/mac-miller-npr-poster-rounded.webp"
//           className="rounded-xl"
//         >
//           <source
//             src="https://d34073qwlt06j3.cloudfront.net/Mac-Miller-NPR-Music-Tiny-Desk-Concert.mp4"
//             type="video/mp4"
//           />
//         </video>
//         <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-2 bg-zinc-900/40	" />
//         <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-3 bg-zinc-900/30	" />
//         <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-4 bg-zinc-900/20	" />
//       </Card>

//       {/* Memento Mori section */}
//       <div className="md:col-span-2 space-y-6 mb-12">
//         <h1 className="text-5xl sm:text-8xl font-bold items-end text-end justify-end mt-6 sm:mt-12 tracking-tight font-seasons">
//           Memento Mori
//         </h1>
//         <p className="text-xl sm:text-3xl text-gray-400 mr-4 sm:mr-[104px] items-end text-end justify-end tracking-tight font-seasons">
//           &quot;remember that you have to die&quot;
//         </p>

//         {/* Overlapping video grid */}
//         <div className="grid grid-cols-2 gap-6">
//           <Card className="col-span-2 md:col-span-1 rounded-xl overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-colors -rotate-1">
//             <video controls className="rounded-xl">
//               <source
//                 src="https://d34073qwlt06j3.cloudfront.net/bill.mp4"
//                 type="video/mp4"
//               />
//             </video>
//           </Card>

//           <Card className="rounded-xl overflow-hidden border-2 border-primary/10 hover:border-primary/20 transition-colors rotate-1">
//             <video controls className="rounded-xl">
//               <source
//                 src="https://res.cloudinary.com/ajtruex/video/upload/q_auto:best/v1696464400/rapisreligion2023-08-21__021616.mp4"
//                 type="video/mp4"
//               />
//             </video>
//           </Card>

//           <Card className="relative z-50 rounded-xl  hover:border-primary/20 transition-colors -rotate-1">
//             <video
//               controls
//               poster="https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.webp"
//               className="rounded-xl"
//             >
//               <source
//                 src="https://d34073qwlt06j3.cloudfront.net/ChrisCole-NewBlood.mp4"
//                 type="video/mp4"
//               />
//             </video>
//             <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-2 bg-zinc-900/40	" />
//             <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-3 bg-zinc-900/30	" />
//             <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-4 bg-zinc-900/20	" />
//           </Card>
//         </div>
//       </div>

//       {/* Full-width bottom video */}
//       <Card className="relative col-span-full rounded-xl transition-colors z-50 bg-zinc-900	">
//         <video
//           controls
//           poster="https://d34073qwlt06j3.cloudfront.net/daft-punk-poster.webp"
//           className="rounded-xl "
//         >
//           <source
//             src="https://d34073qwlt06j3.cloudfront.net/Daft_Punk-Alive_2007_Wireless_O2.mp4"
//             type="video/mp4"
//           />
//         </video>
//         <div className="absolute -inset-1 border-2 border-neutral-800/40 rounded-lg -z-10 translate-y-2 bg-zinc-900/40	" />
//         <div className="absolute -inset-2 border-2 border-neutral-800/30 rounded-lg -z-20 translate-y-3 bg-zinc-900/30	" />
//         <div className="absolute -inset-3 border-2 border-neutral-800/20 rounded-lg -z-30 translate-y-4 bg-zinc-900/20	" />
//       </Card>
//     </div>
//   </div>
//   // </div>
// )
// }
