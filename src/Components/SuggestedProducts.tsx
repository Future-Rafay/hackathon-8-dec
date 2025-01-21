import { cn } from '@/lib/utils';
import { integralCF } from '@/styles/fonts';
import React from 'react'

const SuggestedProducts = () => {
    return (
        <div className=''>
            <h1 className={cn([integralCF.className, "text-[48px] font-bold uppercase text-center mb-[55px]"])}>You Might Also Like</h1>
            {/* <div className="flex gap-4 overflow-x-auto justify-center">
                {product.map((product) => (
                    <ProductCard product={product} />
                ))}
            </div> */}
        </div>
    )
}

export default SuggestedProducts;