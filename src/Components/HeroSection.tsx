import React from 'react'

const HeroSection = () => {
    return (
        <div className='max-w-[1440px] mx-auto'>
            <div className=' h-[663px] w-full bg-[#F2F0F1] bg-cover flex items-center relative' style={{
                backgroundImage: 'url(/images/heroimage.png)'
            }}>
                <div className='ml-[100px] w-[600px] flex flex-col gap-[32px]'>
                    <h1 className='text-[64px] font-bold font-integral leading-[64px]'>
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <h3 className='text-[16px] text-[rgba(0,0,0,0.6)]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</h3>
                    <button className='w-[210px] h-[52px] bg-black flex items-center justify-center font-medium text-white text-[16px] rounded-[62px]'>Shop Now</button>
                    <div className='flex items-center gap-8 h-[90px]'>
                        <div>
                            <span className='text-[40px] font-bold'>200+</span> <br />
                            <p className='text-[16px] text-[rgba(0,0,0,0.6)]'> International Brands</p>
                        </div>
                        <div>
                            <span className='text-[40px] font-bold'>2,000+</span> <br />
                            <p className='text-[16px] text-[rgba(0,0,0,0.6)]'> High-Quality Products</p>
                        </div>
                        <div>
                            <span className='text-[40px] font-bold'>30,000+</span> <br />
                            <p className='text-[16px] text-[rgba(0,0,0,0.6)]'>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <img src="/images/star2.png" alt="star" className='w-[104px] h-[104px] absolute  right-[81px] top-[86px]' />      
                <img src="/images/star1.png" alt="star" className='w-14 h-14 absolute top-[297px] right-[634px]' />      
            </div>
            <div className='h-[112px] w-full bg-black flex items-center justify-evenly'>
                <img src="/images/brandsLogo/versace.png" alt="brandlogo" className='w-[166px] h-[33px]' />
                <img src="/images/brandsLogo/zara.png" alt="brandlogo" className='w-[91px] h-[38px]' />
                <img src="/images/brandsLogo/gucci.png" alt="brandlogo" className='w-[156px] h-[36px]' />
                <img src="/images/brandsLogo/prada.png" alt="brandlogo" className='w-[194px] h-[32px]' />
                <img src="/images/brandsLogo/ck.png" alt="brandlogo" className='w-[206px] h-[33.35px]' />
            </div>
        </div>
    )
}

export default HeroSection;