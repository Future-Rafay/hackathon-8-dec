import Image from 'next/image';
import React from 'react'

const TopHeader = () => {
    return (
        <div className='xs:w-full max-w-[1440px] h-[38px] mx-auto bg-black text-white flex items-center justify-center relative sm:flex-col xs:gap-3'>
            <p className='text-[14px] sm:text-xs text-center text-white/90'>
                Sign up and get 20% off to your first order. &nbsp;<span className='underline underline-offset-4 text-white font-medium'>Sign Up Now</span>
            </p>
            <Image
                src="/svgs/crossicon.svg"
                alt="half star icon"
                height={20}
                width={20}
                className='absolute right-[100px] sm:hidden'
            />
        </div>
    )
}

export default TopHeader;   