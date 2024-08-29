import Image from 'next/image'
import React from 'react'

const DashboardNavbar = ({
    setOpen,
    open
}: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className='px-4 h-52 md:h-32 flex items-center justify-between py-0 bg-gradient-to-r from-[#cd4a77] via-[#956de7] to-[#12cde8] color-white'>
            <Image
                src={"/icons/menu_icon.png"}
                height={25} width={25}
                alt='open/collapse sidemenu'
                className='cursor-pointer'
                title={!open ? "Collapse" : "Expand"}
                onClick={() => setOpen(prev => !prev)}
            />
            <div className="w-1/6 sm:w-1/4 pl-[1vw]">
                <h2 className="text-xs sm:text-lg">Friday, 9th Aug 2024</h2>
            </div>
            <div className="w-1/2 hidden md:flex items-center justify-center">
                <h1 className="text-3xl flex flex-col sm:flex-row items-center justify-center">
                    Hello! Welcome to
                    <h1 className="font-bold ml-0 sm:ml-2 text-center">
                        Hivie
                    </h1>
                </h1>
            </div>
            <div className="w-1/2  flex md:hidden items-center justify-center">
                <h1 className="text-3xl flex flex-col sm:flex-row items-center justify-center font-bold">
                    Hivie
                </h1>
            </div>
            <div className="w-1/4 flex items-center justify-center">
                <Image src="/icons/person_icon.png" alt="Person Photo" height="40" width="40" className="rounded-[50%]" />
                <Image src="/icons/Payment_icon.png" alt="Payment Option" height="40" width="40" />
            </div>
        </div>
    )
}

export default DashboardNavbar