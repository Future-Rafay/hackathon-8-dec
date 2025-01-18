"use client"

// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { integralCF } from '@/styles/fonts';
// import { cn } from '@/lib/utils';

// const HeroSection = () => {
//     return (
//         <div className="sm:w-full max-w-[1440px] mx-auto">
//             <div
//                 className="h-auto py-[100px] sm:py-0 w-full bg-[#F2F0F1] bg-cover flex items-center sm:flex-col sm:items-start relative "
//                 style={{ backgroundImage: 'url(/images/heroimage.png)' }}
//             >
//                 <div className="ml-[100px] w-[600px] flex flex-col gap-[32px] sm:ml-[16px] sm:mt-[40px]">
//                     <h1
//                         className={cn([
//                             integralCF.className,
//                             "text-[64px] sm:text-[36px] text-wrap font-bold leading-[64px] sm:leading-[34px]",
//                         ])}
//                     >
//                         FIND CLOTHES THAT MATCHES YOUR STYLE
//                     </h1>
//                     <h3 className="text-[16px] sm:text-sm text-[rgba(0,0,0,0.6)]">
//                         Browse through our diverse range of meticulously crafted garments,
//                         designed to bring out your individuality and cater to your sense of style.
//                     </h3>
//                     <Link href='/shop'>
//                         <button className="w-[210px] h-[52px] bg-black flex items-center justify-center font-medium text-white text-[16px] rounded-[62px] hover:bg-black hover:text-white transition-all duration-300 ease-linear">
//                             Shop Now
//                         </button>
//                     </Link>
//                     <div className="flex flex-wrap items-center gap-8 h-[90px]">
//                         {/* Stats */}
//                         {[
//                             { count: '200+', text: 'International Brands' },
//                             { count: '2,000+', text: 'High-Quality Products' },
//                             { count: '30,000+', text: 'Happy Customers' },

//                         ].map((item, index) => (
//                             <div key={index}>
//                                 <span className="text-[40px] sm:text-2xl font-bold">{item.count}</span>
//                                 <br />
//                                 <p className="text-[16px] sm:text-[12px] text-[rgba(0,0,0,0.6)]">{item.text}</p>
//                             </div>
//                         ))}
//                     </div>

//                 </div>
//                 <div className='hidden sm:block '
//                 >
//                     <div className='h-[448px] w-[390px] relative bg-cover bg-no-repeat'

//                         style={{ backgroundImage: 'url(/images/heroimage.png)' }}
//                     >
//                         <Image
//                             src="/images/star2.png"
//                             alt="Decorative star"
//                             width={76}
//                             height={76}
//                             className=" absolute"
//                         />
//                         <Image
//                             src="/images/star1.png"
//                             alt="Decorative star"
//                             width={44}
//                             height={44}
//                             className=" absolute"
//                         />
//                     </div>
//                     {/* <Image
//                         src="/images/heroimage.png"
//                         alt="Decorative star"
//                         width={390}
//                         height={448}
//                         className=""
//                     /> */}

//                 </div>
//                 {/* Decorative Images */}
//                 <Image
//                     src="/images/star2.png"
//                     alt="Decorative star"
//                     width={104}
//                     height={104}
//                     className="absolute right-[81px] top-[86px] sm:hidden"
//                 />
//                 <Image
//                     src="/images/star1.png"
//                     alt="Decorative star"
//                     width={56}
//                     height={56}
//                     className="absolute top-[297px] right-[634px] sm:hidden"
//                 />
//             </div>

//             {/* Brand Logos Section */}
//             <div className=" w-full py-10 bg-black flex items-center sm:gap-4 justify-evenly flex-wrap">
//                 {[
//                     { src: '/images/brandsLogo/versace.png', width: 166, height: 33, alt: 'Versace' },
//                     { src: '/images/brandsLogo/zara.png', width: 91, height: 38, alt: 'Zara' },
//                     { src: '/images/brandsLogo/gucci.png', width: 156, height: 36, alt: 'Gucci' },
//                     { src: '/images/brandsLogo/prada.png', width: 194, height: 32, alt: 'Prada' },
//                     { src: '/images/brandsLogo/ck.png', width: 206, height: 33.35, alt: 'Calvin Klein' },
//                 ].map((brand, index) => (
//                     <Image
//                         key={index}
//                         src={brand.src}
//                         alt={brand.alt}
//                         width={brand.width}
//                         height={brand.height}
//                         className="object-contain sm:h-[25px]"
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default HeroSection;


import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { integralCF } from '@/styles/fonts';
import { cn } from '@/lib/utils';

const HeroSection = () => {
    const stats = [
        { count: '200+', text: 'International Brands' },
        { count: '2,000+', text: 'High-Quality Products' },
        { count: '30,000+', text: 'Happy Customers' },
    ];

    const brands = [
        { src: '/images/brandsLogo/versace.png', width: 166, height: 33, alt: 'Versace' },
        { src: '/images/brandsLogo/zara.png', width: 91, height: 38, alt: 'Zara' },
        { src: '/images/brandsLogo/gucci.png', width: 156, height: 36, alt: 'Gucci' },
        { src: '/images/brandsLogo/prada.png', width: 194, height: 32, alt: 'Prada' },
        { src: '/images/brandsLogo/ck.png', width: 206, height: 33, alt: 'Calvin Klein' },
    ];

    return (
        <div className="w-full max-w-[1440px] mx-auto">
            {/* Hero Section */}
            <div
                className="flex flex-col sm:flex-col sm:items-start py-[100px] sm:py-0 relative bg-[#F2F0F1] bg-cover"
                style={{ backgroundImage: 'url(/images/heroimage.png)' }}
            >
                <div className="ml-[100px] sm:ml-[16px] sm:mt-8 flex flex-col gap-6 max-w-[600px]">
                    <h1
                        className={cn([
                            integralCF.className,
                            "text-[64px] sm:text-[36px] font-bold leading-[64px] sm:leading-[34px]",
                        ])}
                    >
                        FIND CLOTHES THAT MATCH YOUR STYLE
                    </h1>
                    <p className="text-[16px] sm:text-[14px] text-[rgba(0,0,0,0.6)] leading-relaxed">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                    <Link href="/shop">
                        <button className="px-8 py-3 bg-black text-white font-medium text-[16px] rounded-full hover:bg-opacity-90 transition-all duration-300">
                            Shop Now
                        </button>
                    </Link>
                    <div className="flex flex-wrap gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <span className="text-[40px] sm:text-[24px] font-bold block">{stat.count}</span>
                                <p className="text-[16px] sm:text-[12px] text-[rgba(0,0,0,0.6)]">{stat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Images */}
                <div className="hidden sm:flex w-full items-center justify-center mt-10">
                    <div className="relative h-[300px] w-[200px]">
                        <Image
                            src="/images/star2.png"
                            alt="Decorative star"
                            width={76}
                            height={76}
                            className="absolute top-0 left-0"
                        />
                        <Image
                            src="/images/star1.png"
                            alt="Decorative star"
                            width={44}
                            height={44}
                            className="absolute bottom-0 right-0"
                        />
                    </div>
                </div>
            </div>

            {/* Brand Logos Section with Marquee Effect */}
            <div className="w-full py-6 bg-black overflow-hidden">
                <div className="flex items-center justify-evenly animate-scroll gap-8">
                    {brands.map((brand, index) => (
                        <Image
                            key={index}
                            src={brand.src}
                            alt={brand.alt}
                            width={brand.width}
                            height={brand.height}
                            className="object-contain sm:h-[25px]"
                        />
                    ))}
                    {/* {brands.map((brand, index) => (
                        <Image
                            key={index + brands.length}
                            src={brand.src}
                            alt={brand.alt}
                            width={brand.width}
                            height={brand.height}
                            className="object-contain sm:h-[25px]"
                        />
                    ))} */}
                </div>
            </div>

        </div>
    );
};

export default HeroSection;