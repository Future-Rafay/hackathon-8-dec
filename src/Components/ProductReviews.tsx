import Image from 'next/image';
import React from 'react'
import TestimonialCard from './TestimonialCard';

const ProductReviews = () => {
    return (
        <div>
            {/* Reviews Navbar */}
            <div className='flex items-center mb-[32px]'>
                <div className='w-[414px] py-[24px] text-center border-b border-solid border-black/30 text-black/60 text-[20px] hover:border-black hover:text-black'>
                    Product Details
                </div>
                <div className='w-[414px] py-[24px] text-center border-b border-solid hover:border-black/30 hover:text-black/60 text-[20px] border-black text-black'>
                    Rating & Reviews
                </div>
                <div className='w-[414px] py-[24px] text-center border-b border-solid border-black/30 text-black/60 text-[20px] hover:border-black hover:text-black'>
                    FAQs
                </div>
            </div>

            {/* Action Buttons */}
            <div className='flex items-center justify-between '>

                {/* Right side */}
                <div className='flex items-baseline'>
                    <p className='text-[24px] font-bold'>All Reviews&nbsp;&nbsp;</p>
                    <span className='text-[16px] text-black/60'> (451)</span>
                </div>

                {/* Left side */}
                <div className='flex items-center gap-3'>
                    <div className='w-[48px] h-[48px] flex items-center justify-center bg-[#F0F0F0] rounded-full'>
                        <Image src='svgs/filtericon.svg' alt='Filter icon' width={24} height={24} />
                    </div>
                    <div className='h-[48px] px-[20px] py-[16px] flex items-center justify-between gap-4 bg-[#F0F0F0] rounded-[62px]'>
                        Latest
                        <Image
                            src='svgs/dropdownicon.svg'
                            alt='...'
                            height={16}
                            width={16}
                            className='transform rotate-180'
                        />
                    </div>
                    <div className='h-[48px] px-[20px] py-[16px] bg-black text-white flex items-center justify-center rounded-[62px]'>
                        Write a Review
                    </div>
                </div>
            </div>

            <div className='mb-[64px] mt-[36px]'>
                {/* <div className='grid gap-5 grid-cols-2 md:grid-cols-1'>
                    {reviewsData.map((review) => (
                        <TestimonialCard key={review.id} review={review} />
                    ))}
                </div> */}
                <button className="w-[218px] h-[52px] rounded-[62px] border border-[rgba(0,0,0,0.3)] text-[16px] font-medium flex items-center justify-center mt-[36px] mx-auto hover:bg-black hover:text-white transition-all duration-300 ease-linear">
                    Load More Reviews
                </button>
            </div>

        </div>
    )
}

export default ProductReviews;