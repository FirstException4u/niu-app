import React from 'react'

const SocialMedia_Details: React.FC<SocialMediaDetailsProps> = ({ Person_information, Social_Media_Details }) => {
    
    return (
    <div className="w-full flex flex-col sm:flex-row">
        <div className="Person_Information w-full md:max-w-[30%] mt-1">
             <div className="Wrapper w-full flex flex-col items-start p-1 md:p-2">
                <h1 className="font-bold text-xl md:text-2xl">{Person_information.Nickname}</h1>
                <h1 className="font-thin text-lg md:text-xl">{Person_information.Name}</h1>
                <h6 className="mt-2 font-thin">{Person_information.Bio}</h6>
                <h6 className="font-thin ">{Person_information.Interest}</h6>
             </div>
        </div>
        <div className="min-h-full Social_Media_Details w-full md:w-[70%]  mt-5 md:mt-0  flex items-center justify-center">
          {/* 
           <div className="Followers w-[35%] h-[90%] flex items-center flex-col justify-evenly"> 
              <div className="w-full  flex items-center justify-center"> 
              <h1 className="text-[6vw] sm:text-[2vw] font-medium">Followers</h1> 
              </div>
              <div className="w-full  flex items-center justify-center"> 
              <h1 className="text-[8vw] sm:text-[4vw] font-extrabold">{Number(Social_Media_Details.Followers) <= 10000 ? Social_Media_Details.Followers : "10000+" }</h1>
              </div>
              <div className="w-full  flex items-center justify-center"> 
              <h1 className="w-full text-[#26c770] text-center">{Social_Media_Details.NetGainFollowers}</h1>
              </div>
           </div>
           <div className="Following w-[35%] h-[90%] flex items-center flex-col justify-evenly">
              <div className="w-full  flex items-center justify-center"> 
              <h1 className="text-[6vw] sm:text-[2vw] font-medium text-center">Following</h1> 
              </div>
              <div className="w-full  flex items-center justify-center"> 
              <h1 className="w-full text-[8vw] sm:text-[4vw] font-extrabold text-center">{Number(Social_Media_Details.Following) <= 10000 ? Social_Media_Details.Following : "10000+" }</h1>
              </div>
              <div className="w-full  flex items-center justify-center"> 
              <h1 className="w-full text-[#26c770] text-center">{Social_Media_Details.NetGainFollowing}</h1>
              </div>
           </div>
           <div className="Post w-[30%] h-[90%] flex items-center flex-col justify-evenly">
              <div className="w-full flex items-center justify-center"> 
              <h1 className="text-[6vw] sm:text-[2vw] font-medium text-center">Posts</h1> 
              </div>
              <div className="w-full  flex items-center justify-center"> 
              <h1 className="w-full text-[8vw] sm:text-[4vw] font-extrabold text-center">{Number(Social_Media_Details.Posts) <= 100 ? Social_Media_Details.Posts : "100+" }</h1>
              </div>
              <div className="w-full  flex items-center justify-center"> 
              <h1 className="w-full text-[#26c770] text-center">{Social_Media_Details.NetGainPost}</h1>
              </div>
           </div>
           */}
         <table className=" w-[100%]  md:w-[90%] min-h-full ">
            <tr>
              <th> <h3 className="text-xl md:text-3xl font-thin">Followers</h3> </th>
              <th> <h3 className="text-xl md:text-3xl font-medium ">Following</h3>  </th>
              <th> <h3 className="text-xl md:text-3xl font-medium ">Posts</h3> </th>
            </tr>
            <tr className=""> 
               <th> <h1 className="text-3xl md:text-5xl font-extrabold ">{Number(Social_Media_Details.Followers) <= 10000 ? Social_Media_Details.Followers : "10k+" }</h1> </th>
               <th> <h1 className="text-3xl md:text-5xl font-extrabold ">{Number(Social_Media_Details.Following) <= 10000 ? Social_Media_Details.Following : "10k+" }</h1></th>
               <th> <h1 className="text-3xl md:text-5xl font-extrabold ">{Number(Social_Media_Details.Posts) <= 100 ? Social_Media_Details.Posts : "100+" }</h1></th>
            </tr>
            <tr className=""> 
               <th> <h1 className="text-[#26c770] font-extrabold">{Social_Media_Details.NetGainFollowers}</h1></th>
               <th> <h1 className="text-[#26c770] font-extrabold">{Social_Media_Details.NetGainFollowing}</h1></th>
               <th> <h1 className="text-[#26c770] font-extrabold">{Social_Media_Details.NetGainPost}</h1></th>
            </tr>
           </table>
        </div>
       </div>
       
  )
}

export default SocialMedia_Details