import { cn } from '@/lib/utils';
import { integralCF } from '@/styles/fonts';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoChevronDown } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='max-w-[1240px] mx-auto h-auto flex items-center  mt-[24px] mb-[30px]'>

            <div className='hidden sm:flex items-center w-full justify-between' >
                <div className='flex items-center'>
                <Image src='svgs/Hamburger.svg' alt='Hamburgur' width={24} height={24} className='mx-[16px]' />
                <Link
                    href='/'
                    className={cn([
                        integralCF.className,
                        'font-bold text-[25px]'
                    ])}>
                    SHOP.CO
                </Link>
                </div>
                <div className='flex items-center gap-3 mx-[16px]'>
                <IoSearch className='w-6 h-6 text-black'/>
                <Link href='/cart'>
                        <Image src='/svgs/carticon.svg' alt='profile icon' height={24} width={24} />
                    </Link>
                    <Link href='/auth'>
                        <Image src='/svgs/profileicon.svg' alt='profile icon' height={24} width={24} />
                    </Link>
                </div>
            </div>

            <div className='flex gap-[40px] items-center sm:hidden'>
                <Link href='/' className={cn([
                    integralCF.className,
                    'font-bold text-[32px] sm:text-[25px]'
                ])} >SHOP.CO</Link>

                <ul className='flex gap-6 sm:hidden'>
                    <li className='flex items-center gap-1'><Link href='' >Shop</Link><IoChevronDown /></li>
                    <li><Link href='/shop' >On Sale</Link></li>
                    <li><Link href='/shop' >New Arrivals</Link></li>
                    <li><Link href='/shop' >Brands</Link></li>
                </ul>
                <div className='w-[577px] px-4 flex gap-3 items-center bg-[#F0F0F0] rounded-[62px] sm:hidden'>
                    <IoSearch className='w-6 h-6 text-[rgba(0,0,0,0.4)]' />
                    <input type="text" placeholder='Search for products...' className='h-[48px] bg-transparent w-full' />
                </div>
                <div className='flex items-center gap-[14px]'>
                    <Link href='/cart'>
                        <Image src='/svgs/carticon.svg' alt='profile icon' height={24} width={24} />
                    </Link>
                    <Link href='/auth'>
                        <Image src='/svgs/profileicon.svg' alt='profile icon' height={24} width={24} />
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar;