import React, { ReactNode } from 'react'
import PersonDetails from "@/components/LandingPage/PersonDetails";
import LeaderBoard from "@/components/LandingPage/LeaderBoard";
import Ranking from "@/components/LandingPage/Ranking";
import Footer from "@/components/LandingPage/Footer";

interface BodyProps {
    children: ReactNode
}
const DashboardBody: React.FC<BodyProps> = ({ children }) => {
    return (
        <div className="flex flex-1 flex-col bg-white dark:bg-neutral-900 min-h-screen">
            {children}
            <div className="p-2 py-8 rounded-none flex flex-col w-full h-100 gap-3  overflow-y-scroll">
                {/* <div className="flex gap-2">
                    {[...new Array(4)].map((i) => (
                        <div
                            key={"first-array" + i}
                            className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 "
                        ></div>
                    ))}
                </div>
                <div className="flex gap-2 flex-1">
                    {[...new Array(2)].map((i) => (
                        <div
                            key={"second-array" + i}
                            className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
                        ></div>
                    ))}
                </div> */}
                <PersonDetails />
            <div className="w-full flex items-center justify-center flex-col md:flex-row gap-3 md:gap-0">
                <LeaderBoard />
                <Ranking />
            </div>
                <Footer />
            </div>
        </div>
    );
}

export default DashboardBody
