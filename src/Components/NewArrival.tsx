import React from 'react'
import ProductCard from './ProductCard'

const NewArrival = () => {
  return (
    <div className='max-w-[1240px] mx-auto h-auto mt-[72px]'>
        <h1 className='text-[48px] font-bold uppercase text-center mb-[55px]'>New arrivals</h1>
        <div className='flex gap-5'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
        <button className='w-[218px] h-[52px] rounded-[62px] border border-[rgba(0,0,0,0.3)] text-[16px] font-medium flex items-center justify-center mt-[36px] mx-auto'>View All</button>
    </div>
  )
}

export default NewArrival