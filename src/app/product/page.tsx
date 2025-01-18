import ProductCard from '@/Components/ProductCard'
import { cn } from '@/lib/utils'
import { integralCF } from '@/styles/fonts'
import Image from 'next/image'
import React from 'react'
import { relatedProductData } from '../page'
import { reviewsData } from '@/Components/Testimonials'
import TestimonialCard from '@/Components/TestimonialCard'

const page = () => {
  return (
    <div className='max-w-[1240px] h-auto mx-auto border-t border-solid border-[rgba(0,0,0,0.3)]'>

      {/* Pagination  */}
      <div className='mt-[24px] mb-[36px] flex gap-2'>
        <span className="text-black/60">Home</span>
        <Image
          src='/svgs/dropdownicon.svg'
          alt="Drop Down"
          height={16}
          width={16}
          className="transform rotate-90 text-black/60"
        />
        <span className="text-black/60">Shop</span>
        <Image
          src='/svgs/dropdownicon.svg'
          alt="Drop Down"
          height={16}
          width={16}
          className="transform rotate-90 text-black/60"
        />
        <span className="text-black/60">Men</span>
        <Image
          src='/svgs/dropdownicon.svg'
          alt="Drop Down"
          height={16}
          width={16}
          className="transform rotate-90 text-black/60"
        />
        <span>T-shirts</span>
      </div>

      {/* Product Details  */}
      <div className='flex gap-10 mb-[60px]'>
        <div className='flex gap-[14px] shrink-0'>
          <div className='flex flex-col gap-3'>
            <Image
              src='/images/Products/pic9.png'
              alt='Product Image'
              height={167}
              width={152}
              className='rounded-[20px] hover:border border-solid border-black'
            />
            <Image
              src='/images/Products/pic10.png'
              alt='Product Image'
              height={167}
              width={152}
              className='rounded-[20px] hover:border border-solid border-black'
            />
            <Image
              src='/images/Products/pic11.png'
              alt='Product Image'
              height={167}
              width={152}
              className='rounded-[20px] hover:border border-solid border-black'
            />
          </div>
          <Image
            src='/images/Products/pic9.png'
            alt='Product Image'
            height={530}
            width={444}
            className='rounded-[20px]'
          />
        </div>
        <div>
          <h1 className={cn([integralCF.className, 'font-bold text-[40px] uppercase'])}>One Life Graphic T shirt</h1>
          <div className='flex gap-2 my-[14px]'>
            <Image
              src="/svgs/staricon.svg"
              alt="star icon"
              height={24.71}
              width={24.71}
            />
            <Image
              src="/svgs/staricon.svg"
              alt="star icon"
              height={24.71}
              width={24.71}
            />
            <Image
              src="/svgs/staricon.svg"
              alt="star icon"
              height={24.71}
              width={24.71}
            />
            <Image
              src="/svgs/staricon.svg"
              alt="star icon"
              height={24.71}
              width={24.71}
            />
            <Image
              src="/svgs/half-staricon.svg"
              alt="star icon"
              height={22}
              width={11}
            />
            <p>
              4.5/<span className='text-black/60'>5</span>
            </p>
          </div>
          <div className='flex gap-3 items-center mb-5'>
            <p className='text-[32px] font-bold'>260$</p>
            <p className='line-through text-black/30 text-[32px] font-bold'>300$</p>
            <div className='w-[72px] h-[34px] bg-red-100 text-[#FF3333] flex items-center justify-center rounded-[62px]'>-40%</div>
          </div>

          <p className='text-black/60 text-[16px]'>
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Separator */}
          <div className='w-full h-0 border-b border-solid border-black/30 my-[24px]' />

          {/* Color Options */}
          <div>
            <p className='text-black/60'>Select Colors</p>
            <div className='flex gap-4 mt-[16px]'>
              <div className='w-[36px] h-[36px] bg-[#4F4631] rounded-full flex items-center justify-center'>
                <Image src='svgs/simpletick.svg' alt='Selected Icon' width={16} height={16} />
              </div>
              <div className='w-[36px] h-[36px] bg-[#314F4A] rounded-full flex items-center justify-center'></div>
              <div className='w-[36px] h-[36px] bg-[#31344F] rounded-full flex items-center justify-center'></div>
            </div>
          </div>

          {/* Separator */}
          <div className='w-full h-0 border-b border-solid border-black/30 my-[24px]' />

          {/* Sizes Option */}
          <div>
            <p className='text-black/60'>Choose Size</p>
            <div className='mt-4 flex gap-3'>
              <div className='py-3 px-[24px] rounded-[62px] text-black/70 bg-[#F0F0F0] inline-block hover:bg-black hover:text-[#F0F0F0]  transition-all duration-300 ease-linear'>Small</div>
              <div className='py-3 px-[24px] rounded-[62px] text-black/70 bg-[#F0F0F0] inline-block hover:bg-black hover:text-[#F0F0F0]  transition-all duration-300 ease-linear'>Medium</div>
              <div className='py-3 px-[24px] rounded-[62px] hover:text-black/70 hover:bg-[#F0F0F0] inline-block bg-black text-[#F0F0F0]  transition-all duration-300 ease-linear'>Large</div>
              <div className='py-3 px-[24px] rounded-[62px] text-black/70 bg-[#F0F0F0] inline-block hover:bg-black hover:text-[#F0F0F0]  transition-all duration-300 ease-linear'>X-Large</div>
            </div>
          </div>

          {/* Separator */}
          <div className='w-full h-0 border-b border-solid border-black/30 my-[24px]' />

          {/* Action Section */}
          <div className='flex gap-5'>

            {/* Quantity Buttons */}
            <div className="relative flex items-center justify-center px-[20px] py-[16px] gap-5 bg-gray-200 rounded-full">
              {/* Frame 1 */}
              <div className="w-5 h-5 flex-none order-1 flex-shrink-0 relative">
                <div className="w-5 h-5 flex-none order-0 flex-shrink-0">
                  <Image src='/svgs/negetiveicon.svg' alt='Minus icon' width={20} height={20} />
                </div>
              </div>

              {/* Text inside Frame */}
              <div className="w-5 h-5 flex-none order-1 flex-shrink-0">
                <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[14px] font-medium text-black">
                  1
                </p>
              </div>

              {/* Frame 2 */}
              <div className="w-5 h-5 flex-none order-2 flex-shrink-0 relative">
                <div className="w-5 h-5 flex-none order-2 flex-shrink-0">
                  <Image src='/svgs/positiveicon.svg' alt='Plus icon' width={20} height={20} />
                </div>
              </div>
            </div>

            {/* Add to cart button */}
            <button className='bg-black text-white px-[54px] py-[16px] w-full rounded-[62px]'>Add to Cart</button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
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
          <div className='grid gap-5 grid-cols-2 md:grid-cols-1'>
            {reviewsData.map((review) => (
              <TestimonialCard key={review.id} review={review} />
            ))}
          </div>
          <button className="w-[218px] h-[52px] rounded-[62px] border border-[rgba(0,0,0,0.3)] text-[16px] font-medium flex items-center justify-center mt-[36px] mx-auto hover:bg-black hover:text-white transition-all duration-300 ease-linear">
            Load More Reviews
          </button>
        </div>

      </div>

      {/* More Products */}
      <div className=''>
        <h1 className={cn([integralCF.className, "text-[48px] font-bold uppercase text-center mb-[55px]"])}>You Might Also Like</h1>
        <div className="flex gap-4 overflow-x-auto justify-center">
          {relatedProductData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default page
