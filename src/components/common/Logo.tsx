import { FC } from 'react'
import { globalConstants } from '@/globalConstants';
import Image from 'next/image';

interface LogoPropTypes {
    src?: string;
    width?: string | number | undefined;
    height?: string | number | undefined;
    customClassname?: string;
}
const Logo: FC<LogoPropTypes> = ({
    src = "",
    width = 60,
    height = 60,
    customClassname
}) => {
    return (
        <div>
            <Image
                src={src || "/icons/icon-hivie-2.svg"}
                alt={globalConstants.brandName}
                width={Number(width)}
                height={Number(height)}
                className={`justify-center items-center ${customClassname}`}
            />
        </div>
    )
}

export default Logo