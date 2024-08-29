import { useStore } from '@/GlobalState/store'
import Image from 'next/image'
import React from 'react'

function Footer() {
  const Footer_Social_Data = [{
    Name: "Instagram",
    Src: "/Footer_logo/instagram_logo.png"
  }, {
    Name: "Discord",
    Src: "/Footer_logo/discord_logo.webp"
  }, {
    Name: "Youtube",
    Src: "/Footer_logo/youtube_logo.webp"
  }, {
    Name: "Twitter",
    Src: "/Footer_logo/x_logo.avif"
  }]
  const { CommunityWidth } = useStore((state) => ({ CommunityWidth: state.CommunityWidth }))
  
  return (
    <div className={`w-full ${CommunityWidth == "100%" ? 'sm:w-full' : 'sm:w-4/5'} pl-0 md:pl-[2vw] pr-0 md:pr-[2vw]`} style={{ transition: "all ease .7s" }}>
      <div className="Wrapper bg-[#252525e6] w-full rounded-3xl pb-5">
        <div className="w-full p-3">
          <h1 className="text-3xl text-center">Join our</h1>
          <h1 className="text-4xl md:text-5xl text-center -translate-y-3 font-extrabold" style={{ background: "linear-gradient(90deg, #FE3F4A 36.74%, #A574FF 68.37%, #07E9FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Community!
          </h1>
        </div>
        <div className="w-full flex justify-evenly mt-3">
          {Footer_Social_Data.map((CurrentSocials,idx) => 
            <div key={CurrentSocials.Name} className="w-1/5 flex flex-col sm:flex-row items-center justify-center gap-[.5vw] bg-[#525252] rounded-xl md:rounded-3xl p-2  ">
              <Image src={CurrentSocials.Src} height={40} width={40} alt={CurrentSocials.Name} className="rounded-[50%] object-cover" />
              <h1 className="text-[#e0d8d8] text-center text-xs md:text-2xl ">{CurrentSocials.Name}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Footer
