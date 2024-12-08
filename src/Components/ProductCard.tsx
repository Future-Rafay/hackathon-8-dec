import React from 'react'

const ProductCard = () => {
    return (
        <div className='flex flex-col gap-4'>
            <div className='w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] bg-contain' style={{backgroundImage: 'url(/images/Products/image.png)'}}></div>
            <div className='flex flex-col gap-2'>
                <h3>T-SHIRT WITH TAPE DETAILS</h3>
                <div>rating ssystem</div>
                <p>$120</p>
            </div>
        </div>
    )
}

export default ProductCard;