import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { integralCF } from '@/styles/fonts';
import { cn } from '@/lib/utils';

const HeroSection = () => {
    return (
        <div className="sm:w-full max-w-[1440px] mx-auto">
            <div
                className="h-[663px] w-full bg-[#F2F0F1] bg-cover flex items-center relative"
                style={{ backgroundImage: 'url(/images/heroimage.png)' }}
            >
                <div className="ml-[100px] xs:ml-0 w-[600px] flex flex-col gap-[32px]">
                    <h1
                        className={cn([
                            integralCF.className,
                            "text-[64px] xs:text-[32px] font-bold leading-[64px]",
                        ])}
                    >
                        FIND CLOTHES THAT MATCHES YOUR STYLE
                    </h1>
                    <h3 className="text-[16px] text-[rgba(0,0,0,0.6)]">
                        Browse through our diverse range of meticulously crafted garments,
                        designed to bring out your individuality and cater to your sense of style.
                    </h3>
                    <Link href='/shop'>
                        <button className="w-[210px] h-[52px] bg-black flex items-center justify-center font-medium text-white text-[16px] rounded-[62px] hover:bg-black hover:text-white transition-all duration-300 ease-linear">
                            Shop Now
                        </button>
                    </Link>
                    <div className="flex items-center gap-8 h-[90px]">
                        {/* Stats */}
                        {[
                            { count: '200+', text: 'International Brands' },
                            { count: '2,000+', text: 'High-Quality Products' },
                            { count: '30,000+', text: 'Happy Customers' },

                        ].map((item, index) => (
                            <div key={index}>
                                <span className="text-[40px] font-bold">{item.count}</span>
                                <br />
                                <p className="text-[16px] text-[rgba(0,0,0,0.6)]">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Decorative Images */}
                <Image
                    src="/images/star2.png"
                    alt="Decorative star"
                    width={104}
                    height={104}
                    className="absolute right-[81px] top-[86px]"
                />
                <Image
                    src="/images/star1.png"
                    alt="Decorative star"
                    width={56}
                    height={56}
                    className="absolute top-[297px] right-[634px]"
                />
            </div>

            {/* Brand Logos Section */}
            <div className="h-28 w-full bg-black flex items-center sm:gap-4 justify-evenly">
                {[
                    { src: '/images/brandsLogo/versace.png', width: 166, height: 33, alt: 'Versace' },
                    { src: '/images/brandsLogo/zara.png', width: 91, height: 38, alt: 'Zara' },
                    { src: '/images/brandsLogo/gucci.png', width: 156, height: 36, alt: 'Gucci' },
                    { src: '/images/brandsLogo/prada.png', width: 194, height: 32, alt: 'Prada' },
                    { src: '/images/brandsLogo/ck.png', width: 206, height: 33.35, alt: 'Calvin Klein' },
                ].map((brand, index) => (
                    <Image
                        key={index}
                        src={brand.src}
                        alt={brand.alt}
                        width={brand.width}
                        height={brand.height}
                        className="object-contain sm:h-3"

                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;
