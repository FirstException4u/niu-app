import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';

interface MenuItemProps {
    open: boolean;
    icon?: any;
    label: String;
    isActive?: boolean;
    onClick?: () => void;
    index?: number;
}
const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive, onClick, open = false, index = 1 }) => {

    // return (
    //     <motion.div className={cn(
    //         "h-full px-4 py-2 hidden md:flex md:flex-col w-[310px] flex-shrink-0",
    //         "group/sidebar",
    //         "relative justify-start text-center"
    //     )}

    //     >
    //         <AnimatePresence>
    //             <li
    //                 // className={cn(
    //                 //     `h-12 flex items-center pl-2 cursor-pointer group-hover/sidebar:translate-x-1`,
    //                 //     isActive ? 'bg-gray-700 text-white' : 'text-gray-400'
    //                 // )}
    //                 className={cn(
    //                     "h-12 flex items-center px-4 cursor-pointer group",
    //                     "rounded-l-full",
    //                     isActive
    //                         ?
    //                         "bg-neutral-900 text-white"
    //                         : "text-gray-400 hover:bg-neutral-900 hover:text-white",
    //                 )}
    //                 onClick={onClick && onClick}
    //             >
    //                 <span className="mr-3">{icon}</span>
    //                 {!open && <span>{label}</span>}
    //             </li>
    //         </AnimatePresence>
    //     </motion.div>
    // )


    return (
        <div className="w-full relative pl-4">
            <div
                id={String(index)}
                className={cn(
                    "h-full hidden md:flex md:flex-row flex-shrink-0",
                    "px-4 py-3",
                    "group/sidebar",
                    "relative justify-start text-center",
                    "rounded-l-full",
                     "z-[9]",
                    "flex items-center px-4 cursor-pointer group",
                    isActive ? "bg-neutral-900" : "",
                    open ? "w-100" : "w-full"
                )}
                onClick={onClick}
            >
                {/* <span className="px-3">{icon}</span> */}
                {icon && <Image
                    className={cn(
                        "object-contain",
                        open ? 'px-1' : 'px-3'
                    )}
                    src={icon}
                    height={45}
                    width={45}
                    alt={"Drops"}
                />}
                {!open && <h1 className="sm:text-[1.5vw] flex items-center justify-center font-semibold font-[BostonBold]">{label}</h1>}
            </div>
            {!open ?
             <> <div className={`w-1/4 z-[1] h-[5vw] absolute -right-1 bottom-[100%] rounded-br-[60%]  `}
                style={{ boxShadow: `25px 16px 0 0 ${isActive ? '#171717' : 'transparent'}` }}></div>
                <div className={`w-1/4 z-[1] h-[5vw]  absolute -right-1 top-[100%] rounded-tr-[60%]`}
                    style={{ boxShadow: `25px -16px 0 0 ${isActive ? '#171717' : 'transparent'}` }}></div>
             </>
              :
              <> <div className={`w-1/2 z-[1] h-[5vw] absolute right-0 bottom-[100%] rounded-br-[25%]  `}
              style={{ boxShadow: `25px 16px 0 0 ${isActive ? '#171717' : 'transparent'}` }}></div>
              <div className={`w-1/2 z-[1] h-[5vw]  absolute right-0 top-[100%] rounded-tr-[25%]`}
                  style={{ boxShadow: `25px -16px 0 0 ${isActive ? '#171717' : 'transparent'}` }}></div>
              </>
            }
        </div>
    )
};

export default MenuItem;