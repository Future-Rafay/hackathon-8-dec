import React from "react";
// import Image from "next/image";
import { Product } from "@/types/product.types";
import FilterSidebar from '@/Components/Filters'
import ProductCard from '@/Components/ProductCard';
import { relatedProductData } from "@/app/page";
import { topSellingData } from '@/Components/TopSelling';
import { newArrivalsData } from '@/Components/NewArrival';
import Image from "next/image";

const data: Product[] = [
    ...relatedProductData,
    ...topSellingData,
    ...newArrivalsData,
];

const page = () => {
    return (
        <div className='max-w-[1240px] mx-auto border-t-2 flex flex-col'>
            <div className='my-[24px]'>Home &gt; <span>Cart</span></div>
            <div className='flex gap-5'>
                <FilterSidebar />
                <div className='w-[925px] h-auto flex flex-col'>
                    <div className='w-full mb-[16px] flex items-center justify-between'>
                        <h3 className='text-[32px] font-bold'>
                            Casual
                        </h3>
                        <p className="text-[16px] text-[rgba(0,0,0,0.6)] flex gap-2">
                            Showing 1-10 of 100 Products
                            Sort by: <span className="text-black">Most Popular</span><Image src='/svgs/dropdownicon.svg' alt="Drop Down" height={16} width={16} className="transform rotate-180" />
                        </p>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {data.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                    <div className="w-full border h-0 mt-[32px] mb-[20px]" />
                    <div className="w-full h-[40px] flex items-center justify-between">
                        <div className="flex gap-2"><Image src='/svgs/arrowicon.svg' alt="Arrow icon" height={20} width={20} /> Previous</div>
                        <div className="flex">
                            <div className="w-10 h-10 bg-[rgba(0,0,0,0.06)] rounded-lg flex items-center justify-center">1</div>
                            <div className="w-10 h-10  flex items-center justify-center">2</div>
                            <div className="w-10 h-10   flex items-center justify-center">3</div>
                            <div className="w-10 h-10 flex items-center justify-center">...</div>
                            <div className="w-10 h-10   flex items-center justify-center">4</div>
                            <div className="w-10 h-10  flex items-center justify-center" >5</div>
                            <div className="w-10 h-10   flex items-center justify-center">6</div>
                        </div>
                        <div className="flex gap-2">Next <Image src='/svgs/arrowicon.svg' alt="Arrow icon" height={20} width={20} /></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default page;
