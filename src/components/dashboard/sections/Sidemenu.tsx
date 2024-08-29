import React, { useState } from 'react'
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Logo from '@/components/common/Logo';
import MenuItem from './MenuItem';

interface SideMenuProps {
    open: boolean;
    // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DashboardSidemenu: React.FC<SideMenuProps> = ({ open }) => {
    const [activeItem, setActiveItem] = useState('Home');

    const menuItems = [
        { icon: '/icons/Home_icon.png', label: 'Home', href: "#", },
        { icon: '/icons/Drops_icon.png', label: 'Drops', href: "#", },
        { icon: '/icons/Community_icon.png', label: 'Community', href: "#", },
        { icon: '/icons/Seeding_icon.png', label: 'Seeding', href: "#", },
        { icon: '/icons/MarketPlace_icon.png', label: 'Marketplace', href: "#", },
    ];

    return (
        <div className={cn(
            "fixed sm:static top-0 -left-[100%] h-screen bg-gradient-to-b from-[#52262e]  to-[#0b0b0b] text-white",
            open ? 'w-[80px]' : 'w-1/2 sm:w-1/5'
        )} style={{transition:"all ease .4s"}}>
            <div className="p-4">
                <div className='flex justify-center'>
                    <Logo height={80} width={80} />
                </div>
                <h2 className={cn(
                    "text-xl font-bold text-center mb-6 pt-3",
                    open ? 'collapse' : "visible"
                )}>Hivie</h2>
            </div>
            <nav>
                <ul className='menu'>
                    {menuItems.map((item, index) => (
                        <MenuItem
                            open={open}
                            index={index + 1}
                            key={item.label}
                            icon={item.icon}
                            label={item.label}
                            isActive={activeItem === item.label}
                            onClick={() => setActiveItem(item.label)}
                        />
                    ))}
                </ul>
            </nav>
            <div className="absolute bottom-0 w-64 p-4">
                <MenuItem
                    open={open}
                    label="Settings"
                />
            </div>
        </div>
    )
}

export default DashboardSidemenu