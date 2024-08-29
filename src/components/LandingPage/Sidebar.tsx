"use client"
import { useStore } from '@/GlobalState/store';
import { motion } from 'framer-motion';
import Image from 'next/image'
import React, { useState } from 'react'

function Sidebar() {
    const [PrevClickedElement, setPrevClickedElement] = useState<HTMLDivElement | null>(null);
    const [CurrentInvertedRadius, setCurrentInvertedRadius] = useState(0);
    const { SidebarTranslate, changeSidebar, changeHeaderWidth, changePersonDetailsWidth, changeLeaderBoardWidth, changeRankingWidth, changeCommunityWidth } = useStore((state) => ({
        SidebarTranslate: state.SidebarTranslate,
        changeSidebar: state.changeSidebar,
        changeHeaderWidth: state.changeHeaderWidth,
        changePersonDetailsWidth: state.changePersonDetailsWidth,
        changeLeaderBoardWidth: state.changeLeaderBoardWidth,
        changeRankingWidth: state.changeRankingWidth,
        changeCommunityWidth: state.changeCommunityWidth
    }))
    function ChangeBackGroundColor(e: React.MouseEvent<HTMLDivElement>) {
        if (PrevClickedElement) {
            PrevClickedElement.style.backgroundColor = "transparent";
        }
        e.currentTarget.style.backgroundColor = "#141212";
        setPrevClickedElement(e.currentTarget);
        setCurrentInvertedRadius(Number(e.currentTarget.id));
    }
    function HandleCollapseAnimation() {
        changeSidebar("-100%");
        changeHeaderWidth("100%");
        changePersonDetailsWidth("100%");
        changeLeaderBoardWidth("70%");
        changeRankingWidth("25%");
        changeCommunityWidth("100%");
    }
    return (
        <div className={`min-h-screen z-[9] flex flex-col w-1/2 sm:w-1/5 bg-gradient-to-b from-[rgba(184,30,30,1)] to-[rgba(0,0,0,1)] fixed top-0 left-0 ${SidebarTranslate == "-100%" ? 'translate-x-[-100%]' : 'translate-x-[0%]'}`} style={{ transition: "all ease .7s" }}>
            <div className={`CONTENT w-full min-h-screen flex flex-col justify-evenly`}>
                <div className="w-full flex justify-end p-[.2vw] pr-[1vw]">
                    <Image src={"/icons/left_icon.png"} height={30} width={30} alt={"Close"} onClick={HandleCollapseAnimation} />
                </div>
                <div className="Logo w-full h-[10%] flex items-center justify-center pt-[1vw] pb-[2vw] sm:pb-[0vw]">
                    <Image src={"/Logo.png"} alt={"Company's Logo"} className="w-1/2 sm:w-1/3 object-contain rotate-90" width="100" height="100" />
                </div>
                <div className="SideOption w-full h-[60%] flex items-center flex-col gap-[2vw] sm:gap-[1vw] pl-[1vw] pt-[2vw]">
                    <div className="Home_option w-full relative ">
                        <div id="1" className="w-full  z-[2] rounded-l-3xl flex justify-start text-center font-bold relative gap-[2vw] sm:gap-[1vw] p-[2vw] sm:p-[.5vw] pl-[5vw] sm:pl-[3vw]" onClick={(e) => ChangeBackGroundColor(e)}>
                            <Image src={"/icons/Home_icon.png"} sizes="(max-width: 768px) 100vw,33vw" className="w-[20%] sm:w-[15%] object-contain" width="30" height="30" alt={"Home"} />
                            <h1 className="sm:text-[1.5vw] flex items-center justify-center font-semibold font-[BostonBold]">Home</h1>
                        </div>
                        <div className={`w-1/4 z-[1] h-[5vw]  absolute -right-1 bottom-[100%] rounded-br-[60%]`} style={{ boxShadow: `25px 16px 0 0 ${CurrentInvertedRadius == 1 ? '#141212' : 'transparent'}` }}></div>
                        <div className={`w-1/4 z-[1] h-[5vw]  absolute -right-1 top-[100%] rounded-tr-[60%]`} style={{ boxShadow: `25px -16px 0 0 ${CurrentInvertedRadius == 1 ? '#141212' : 'transparent'}` }}></div>
                    </div>
                    {/* <div className="Drops_option w-full relative">
                        <div id="2" className="w-full z-[2]   rounded-l-3xl flex justify-start text-center font-bold relative gap-[2vw] sm:gap-[1vw] p-[2vw] sm:p-[.5vw] pl-[5vw] sm:pl-[3vw]" onClick={(e) => ChangeBackGroundColor(e)}>
                            <Image className="w-[20%] sm:w-[15%] object-contain" src={"/icons/Drops_icon.png"} height={30} width={30} alt={"Drops"} />
                            <h1 className="sm:text-[1.5vw] flex items-center justify-center font-semibold font-[BostonBold]">Drops</h1>
                        </div>
                        <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 bottom-[100%] rounded-br-[50%]`} style={{ boxShadow: `25px 16px 0 0 ${CurrentInvertedRadius == 2 ? '#141212' : 'transparent'}` }}></div>
                        <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 top-[100%] rounded-tr-[50%]`} style={{ boxShadow: `25px -16px 0 0 ${CurrentInvertedRadius == 2 ? '#141212' : 'transparent'}` }}> </div>
                    </div>
                    <div className="Community_option w-full relative">
                        <div id="3" className="w-full z-[2]   rounded-l-3xl flex justify-start text-center font-bold relative gap-[2vw] sm:gap-[1vw] p-[2vw] sm:p-[.5vw] pl-[5vw] sm:pl-[3vw]" onClick={(e) => ChangeBackGroundColor(e)}>
                            <Image className="w-[20%] sm:w-[15%] object-contain" src={"/icons/Community_icon.png"} height={30} width={30} alt={"Community"} />
                            <h1 className="sm:text-[1.5vw] z-[2] flex items-center justify-center font-semibold font-[BostonBold]">Community</h1>
                        </div>
                        <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 bottom-[100%] rounded-br-[50%] `} style={{ boxShadow: `25px 16px 0 0 ${CurrentInvertedRadius == 3 ? '#141212' : 'transparent'}` }}></div>
                        <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 top-[100%] rounded-tr-[50%]`} style={{ boxShadow: `25px -16px 0 0 ${CurrentInvertedRadius == 3 ? '#141212' : 'transparent'}` }}></div>
                    </div>
                    <div className="Seeding_option w-full relative">
                        <div id="4" className="w-full z-[2]   rounded-l-3xl flex justify-start text-center font-bold relative gap-[2vw] sm:gap-[1vw] p-[2vw] sm:p-[.5vw] pl-[5vw] sm:pl-[3vw]" onClick={(e) => ChangeBackGroundColor(e)}>
                            <Image className="w-[20%] sm:w-[15%] object-contain" src={"/icons/Seeding_icon.png"} height={30} width={30} alt={"Seeding"} />
                            <h1 className="sm:text-[1.5vw] z-[2] flex items-center justify-center font-semibold font-[BostonBold]" >Seeding</h1>
                        </div>
                        <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 bottom-[100%] rounded-br-[50%]`} style={{ boxShadow: `25px 16px 0 0 ${CurrentInvertedRadius == 4 ? '#141212' : 'transparent'}` }}></div>
                        <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 top-[100%] rounded-tr-[50%]`} style={{ boxShadow: `25px -16px 0 0 ${CurrentInvertedRadius == 4 ? '#141212' : 'transparent'}` }}></div>
                    </div>
                    <div className="Marketplace_option w-full relative">
                        <div id="5" className="w-full z-[2]   rounded-l-3xl flex justify-start text-center font-bold relative gap-[2vw] sm:gap-[1vw] p-[2vw] sm:p-[.5vw] pl-[5vw] sm:pl-[3vw]" onClick={(e) => ChangeBackGroundColor(e)}>
                            <Image className="w-[20%] sm:w-[15%] object-contain" src={"/icons/MarketPlace_icon.png"} height={30} width={30} alt={"MarketPlace"} />
                            <h1 className="sm:text-[1.5vw] z-[2] flex items-center justify-center font-semibold font-[BostonBold]" >Marketplace</h1>
                        </div>
                        <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 bottom-[100%] rounded-br-[50%]`} style={{ boxShadow: `25px 16px 0 0 ${CurrentInvertedRadius == 5 ? '#141212' : 'transparent'}` }}></div>
                        <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 top-[100%] rounded-tr-[50%]`} style={{ boxShadow: `25px -16px 0 0 ${CurrentInvertedRadius == 5 ? '#141212' : 'transparent'}` }}></div>
                    </div> */}
                </div>
                <div className="Setting w-full flex-1 flex items-center justify-end flex-col ">
                    <h1 className="text-[5vw] sm:text-[1.5vw] font-semibold font-[BostonSemiBold]" >Settings</h1>
                </div>
            </div>
        </div>
    )
}

export default Sidebar