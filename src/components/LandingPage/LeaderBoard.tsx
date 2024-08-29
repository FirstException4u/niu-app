import { useStore } from '@/GlobalState/store'
import Image from 'next/image'
import React from 'react'

function LeaderBoard() {
  const LeaderBoard_Data = [{
    Name: "Satyam",
    Drops_Enrolled: 5,
    Drops_Completed: 2,
    Coins_Earned: 200,
    Rank: 1
  }, {
    Name: "Garvit",
    Drops_Enrolled: 6,
    Drops_Completed: 1,
    Coins_Earned: 100,
    Rank: 2
  }, {
    Name: "Ana",
    Drops_Enrolled: 4,
    Drops_Completed: 1,
    Coins_Earned: 100,
    Rank: 3
  }]
  const { LeaderBoardWidth } = useStore((state) => ({ LeaderBoardWidth: state.LeaderBoardWidth }))
  
  return (
    <div className={`w-full ${LeaderBoardWidth === "70%" ? 'md:w-[70%]' : 'md:w-[55%]'} rounded-3xl p-[.5vw] pl-0 md:pl-[1vw] pr-0 md:pr-[1vw]`} style={{ transition: "all ease .7s" }}>
      <div className="w-full bg-[#252525e6] rounded-3xl">
        <div className="Wrapper w-full p-2 md:p-4">
          <table className="w-full border-separate border-spacing-y-1">
            <thead>
              <tr className="relative">
                <th>
                  <h1 className="text-[#ffffff82] text-start pl-2 md:pl-5 text-xs md:text-base">Season 1</h1>
                </th>
                <th colSpan={3}>
                  <h1 className="text-xl md:text-3xl text-[#ffffffc5]">Leaderboard</h1>
                </th>
                <th>
                  <div className="absolute rounded-[50%] p-1 top-0 right-1 md:right-4" style={{background:"rgba(85, 85, 85, 0.75)"}}>
                    <Image src="/icons/left_icon.png" height={25} width={25} alt="right arrow" style={{transform:"rotate(130deg)"}}/>
                  </div>
                </th>
              </tr>
              <tr></tr>
              <tr></tr>
              <tr style={{background:`rgba(23,23,23,1)`}}>
                <th className="rounded-tl-3xl rounded-bl-3xl border-r border-gray-600">
                  <h1 className="text-[#ffffffaa] text-start text-xs md:text-base pl-2 md:pl-4">Name</h1>
                </th>
                <th className="border-r border-gray-600">
                  <h1 className="p-2 text-[#ffffffaa] text-center text-xs md:text-base">Drops Enrolled</h1>
                </th>
                <th className="border-r border-gray-600">
                  <h1 className="text-[#ffffffaa] text-center text-xs md:text-base">Drops Completed</h1>
                </th>
                <th className="border-r border-gray-600">
                  <h1 className="text-[#ffffffaa] text-center text-xs md:text-base">Coins Earned</h1>
                </th>
                <th className="rounded-tr-3xl rounded-br-3xl">
                  <h1 className="text-[#ffffffaa] text-center text-xs md:text-base pl-1 md:pl-0 pr-2 md:pr-3">Rank</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {LeaderBoard_Data.map((leaderBoardVal, idx) => (
                <tr key={idx} style={{background:`rgba(23,23,23,${(3-idx)/4})`}}>
                  <td className="p-2 rounded-tl-3xl rounded-bl-3xl border-r border-gray-600">
                    <h1 className="text-[#ffffffaa] text-start text-xs md:text-base pl-0 md:pl-2">{leaderBoardVal.Name}</h1>
                  </td>
                  <td className="border-r border-gray-600">
                    <h1 className="text-[#ffffffaa] text-center text-xs md:text-base">{leaderBoardVal.Drops_Enrolled}</h1>
                  </td>
                  <td className="border-r border-gray-600">
                    <h1 className="text-[#ffffffaa] text-center text-xs md:text-base">{leaderBoardVal.Drops_Completed}</h1>
                  </td>
                  <td className="border-r border-gray-600">
                    <h1 className="text-[#ffffffaa] text-center text-xs md:text-base">{leaderBoardVal.Coins_Earned}</h1>
                  </td>
                  <td className="rounded-tr-3xl rounded-br-3xl">
                    <h1 className="text-[#ffffffaa] text-center text-xs md:text-base pr-2 md:pr-3">{leaderBoardVal.Rank}</h1>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard
