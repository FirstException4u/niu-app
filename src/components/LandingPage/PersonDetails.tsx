"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import SocialMedia_Details from '../Person_details_components/SocialMedia_Details'
import { useStore } from '@/GlobalState/store'

function PersonDetails() {

  const { PersonDetailsWidth } = useStore((state) => ({ PersonDetailsWidth: state.PersonDetailsWidth }))

  const Person_information: PersonInformation = {
    Name: "Atul Prabhakar",
    Nickname: "Renaissance_noob",
    Bio: "Jack of all trades.master of none.",
    Interest: "@pec.ac.in ProdMan @medscape @webmd"
  };

  const Social_Media_Details: SocialMediaDetail[] = [{
    Name: "Instagram",
    Followers: "10001",
    NetGainFollowers: "+293 (4.2%)",
    Following: "1202",
    NetGainFollowing: "+1 (0.1%)",
    Posts: "76",
    NetGainPost: "+3 (3.9%)"
  }, {
    Name: "TikTok",
    Followers: "8000",
    NetGainFollowers: "+212 (1.2%)",
    Following: "1256",
    NetGainFollowing: "+5 (0.4%)",
    Posts: "80",
    NetGainPost: "+4 (4.5%)"
  }, {
    Name: "YouTube",
    Followers: "8065",
    NetGainFollowers: "+500 (7.2%)",
    Following: "1264",
    NetGainFollowing: "+2 (0.4%)",
    Posts: "60",
    NetGainPost: "+9 (2.9%)"
  }];

  const [CurrentSocialMedia, setCurrentSocialMedia] = useState<number>(0);

  return (
    <div className={`w-full  ${PersonDetailsWidth == "80%" ? 'sm:w-4/5' : 'sm:w-full'}  pl-1 md:pl-6 pr-1 md:pr-6`} style={{ transition: "all ease .7s" }}>
      <div className="w-full backdrop-blur-xl min-h-[45vh] rounded-3xl  bg-[rgba(255,255,255,0.04)] p-2 md:p-3 pb-4" style={{ WebkitBackdropFilter: "blur(10px)" }}>
        <div className=" Header_Person_Details w-full flex items-start justify-between p-0 sm:p-2 flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/12 flex items-center justify-between mt-3 sm:mt-0 relative">
            <Image src="/icons/person_icon.png" alt="Person Photo" height="60" width="60" className="rounded-[50%]" />
            <div className="flex sm:hidden relative w-20">
                   <div className="absolute rounded-[50%] p-1 -top-5 right-0 md:right-4" style={{background:"rgba(85, 85, 85, 0.75)"}}>
                    <Image src={"/icons/left_icon.png"} height={25} width={25} alt={"right arrow"} style={{transform:"rotate(130deg)"}}/>
                    </div>
          </div>
          </div>
          <div className="ToggleButton mt-3 sm:mt-0 p-1 w-full sm:w-1/2 bg-[#171717] rounded-3xl flex items-center gap-[.5vw]">
            <button className={`p-[1vw] sm:p-[.5vw] ${CurrentSocialMedia === 0 ? 'bg-transparent' : 'bg-[#323232]'} w-1/3 sm:w-1/2 rounded-3xl focus:outline-none`} onClick={() => { setCurrentSocialMedia(0) }}><h1 className={`font-[BostonBold] bg-gradient-to-r from-[#FE3F4A] to-[#A574FF] ${CurrentSocialMedia == 0 ? 'text-transparent' : 'text-[#7f7f7f]'} bg-clip-text font-extrabold text-base md:text-xl`}>Instagram</h1></button>
            <button className={`p-[1vw] sm:p-[.5vw] ${CurrentSocialMedia === 1 ? 'bg-transparent' : 'bg-[#323232]'} w-1/3 sm:w-1/2 rounded-3xl focus:outline-none`} onClick={() => { setCurrentSocialMedia(1) }}><h1 className={`font-[BostonBold] bg-gradient-to-r from-[#FE3F4A] to-[#A574FF] ${CurrentSocialMedia == 1 ? 'text-transparent' : 'text-[#7f7f7f]'} bg-clip-text font-extrabold text-base md:text-xl`}>Youtube</h1></button>
            <button className={`p-[1vw] sm:p-[.5vw] ${CurrentSocialMedia === 2 ? 'bg-transparent' : 'bg-[#323232]'} w-1/3 sm:w-1/2 rounded-3xl focus:outline-none`} onClick={() => { setCurrentSocialMedia(2) }}><h1 className={`font-[BostonBold] bg-gradient-to-r from-[#FE3F4A] to-[#A574FF] ${CurrentSocialMedia == 2 ? 'text-transparent' : 'text-[#7f7f7f]'} bg-clip-text font-extrabold text-base md:text-xl`}>TikTok</h1></button>
          </div>
          <div className="hidden sm:flex relative w-20 bg-red-600">
                   <div className="absolute rounded-[50%] p-1 top-0 right-1 md:right-4" style={{background:"rgba(85, 85, 85, 0.75)"}}>
                    <Image src={"/icons/left_icon.png"} height={25} width={25} alt={"right arrow"} style={{transform:"rotate(130deg)"}}/>
                    </div>
          </div>
        </div>
        <SocialMedia_Details Person_information={Person_information} Social_Media_Details={Social_Media_Details[CurrentSocialMedia]} />
      </div>
    </div>
  )
}

export default PersonDetails
