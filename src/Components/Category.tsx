import { cn } from '@/lib/utils';
import { integralCF } from '@/styles/fonts';
import React from 'react'

const Category = () => {
    return (
        <div className='max-w-[1240px] mx-auto h-auto md:w-full bg-[#F0F0F0] rounded-[40px] my-[80px]'>
            <h1 className={cn([ integralCF.className,'text-[48px] sm:text-[36px] sm:text-center font-bold uppercase h-[192px] flex items-center justify-center'])}>Browse By dress STYLE</h1>
            <div className='flex flex-col gap-5 mb-[76px]'>
                <div className='flex gap-5 justify-center md:flex-col'>
                    <div className='w-[407px] sm:w-auto sm:h-auto h-[289px] rounded-[20px] bg-cover hover:scale-105 transition-transform duration-300' style={{ backgroundImage: 'url(/images/Category/casual.png)' }}>
                        <p className='text-[36px] font-bold ml-[36px] mt-[25px]'>Casual</p>
                    </div>
                    <div className='w-[684px] sm:w-auto sm:h-autoh-[289px] rounded-[20px] bg-cover hover:scale-105 transition-transform duration-300' style={{ backgroundImage: 'url(/images/Category/formal.png)' }}>
                        <p className='text-[36px] font-bold ml-[36px] mt-[25px]'>Formal</p>
                    </div>
                </div>
                <div className='flex gap-5 justify-center md:flex-col'>
                    <div className='w-[684px] sm:w-auto sm:h-auto h-[289px] rounded-[20px] bg-cover hover:scale-105 transition-transform duration-300' style={{ backgroundImage: 'url(/images/Category/party.png)' }}>
                        <p className='text-[36px] font-bold ml-[36px] mt-[25px]'>Party</p>
                    </div>
                    <div className='w-[407px]  sm:w-auto sm:h-auto h-[289px] rounded-[20px] bg-cover hover:scale-105 transition-transform duration-300' style={{ backgroundImage: 'url(/images/Category/gym.png)' }}>
                        <p className='text-[36px]  font-bold ml-[36px] mt-[25px]'>Gym</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category;
