import { useState } from 'react';
import { cn } from "@/lib/utils";
import DashboardSidemenu from '@/components/dashboard/sections/Sidemenu';
import DashboardBody from '@/components/dashboard/sections/Body';
import DashboardNavbar from '@/components/dashboard/sections/Navbar';


const DashboardWrapper = () => {
    const [open, setOpen] = useState(false);


    return (
        <div
            className={cn(
                "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800  flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                "h-screen w-screen"
            )}
        >
            <DashboardSidemenu open={open} />
            <DashboardBody>
                <DashboardNavbar open={open} setOpen={setOpen} />
            </DashboardBody>
        </div>
    )
}

export default DashboardWrapper