import { useStore } from '@/GlobalState/store'
import React from 'react'
import BarChart from '../Ranking_components/BarChart'
import Image from 'next/image'

function Ranking() {
  const {RankingWidth} = useStore((state)=>({RankingWidth:state.RankingWidth}))

  return (
    <div className={`min-h-[38vh] md:min-h-[41vh]  w-full ${RankingWidth == "30%" ? 'sm:w-[25%]' : 'sm:w-[28%]'}  rounded-3xl pl-1 sm:pl-0 pr-1 sm:pr-[1vw]`} style={{transition : "all ease .7s"}}>
      <div className="Wrapper min-h-[38vh] md:min-h-[41vh] relative bg-[#252525e6] rounded-3xl flex items-center justify-center p-2">
            <BarChart/>
            <div className="absolute rounded-[50%] p-1 top-4 right-4" style={{background:"rgba(85, 85, 85, 0.75)"}}>
              <Image src={"/icons/left_icon.png"} height={25} width={25} alt={"right arrow"} style={{transform:"rotate(130deg)"}}/>
            </div>
      </div>
    </div>
  )
}

export default Ranking