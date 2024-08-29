import Image from 'next/image'
import React from 'react'
import { useStore } from '@/GlobalState/store';

function Header() {
  const {HeaderWidth,changeSidebar,changeHeaderWidth,changePersonDetailsWidth,changeLeaderBoardWidth,changeRankingWidth,changeCommunityWidth}  = useStore((state)=>({
    HeaderWidth:state.HeaderWidth,
    changeSidebar:state.changeSidebar,
    changeHeaderWidth:state.changeHeaderWidth,
    changePersonDetailsWidth:state.changePersonDetailsWidth,
    changeLeaderBoardWidth:state.changeLeaderBoardWidth,
    changeRankingWidth:state.changeRankingWidth,
    changeCommunityWidth:state.changeCommunityWidth
}))
  function HandleCollapseAnimation(){
    changeSidebar("0%");
    changeHeaderWidth("80%");
    changePersonDetailsWidth("80%");
    changeLeaderBoardWidth("55%");
    changeRankingWidth("30%");
    changeCommunityWidth("80%");
 }
  return (
    <div className={`h-[15vh] z-[5] absolute -right-0 sm:right-0  w-full ${HeaderWidth == "80%" ? 'sm:w-4/5' : 'sm:w-full'} `} style={{background: "linear-gradient(90deg, rgba(254, 63, 74, 0.9) 0%, rgba(165, 116, 255, 0.9) 50%, rgba(7, 233, 255, 0.9) 100%)",transition:"all ease .7s"}}>
        <div className="h-[15vh] w-full flex items-center justify-between">
          <div className="pl-[1vw] sm:pl-[4vw] ">
           <Image src={"/icons/menu_icon.png"} height={40} width={40} alt={"open the Option"} onClick={HandleCollapseAnimation}/>
          </div>
          <div className="w-1/6 sm:w-1/4 pl-[1vw]">
           <h2 className="text-[2.8vw] sm:text-[1.4vw]">Friday, 9th Aug 2024</h2>
          </div>
          <div className="w-1/3 sm:w-1/2 flex items-center justify-center">
          <h1 className="text-[4vw] sm:text-[2.8vw] flex flex-col sm:flex-row items-center justify-center">Hello! Welcome to <h1 className="font-bold ml-0 sm:ml-2 text-center">Hivie</h1></h1>
          </div>     
          <div className="w-1/4 flex items-center justify-center">
          <Image src="/icons/person_icon.png" alt="Person Photo" height="40" width="40" className="rounded-[50%]"/>
          <Image src="/icons/Payment_icon.png" alt="Payment Option" height="40" width="40"/>
          </div>
        </div>
    </div>
  )
}

export default Header