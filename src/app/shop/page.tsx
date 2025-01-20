// import React from "react";
// import { Product } from "@/types/product.types";
// import FilterSidebar from '@/Components/Filters';
// import ProductCard from '@/Components/ProductCard';
// import { relatedProductData } from "@/app/page";
// import { topSellingData } from '@/Components/TopSelling';
// import { newArrivalsData } from '@/Components/NewArrival';
// import Image from "next/image";

// const data: Product[] = [
//     ...relatedProductData,
//     ...topSellingData,
//     ...newArrivalsData,
// ];

// import { client } from "@/sanity/lib/client";

// export async function getProducts() {

//   const query = ` *[_type == "products"] `;

//   const products = await client.fetch(query);
//   return products;
// }



// const Page = () => {
//     return (
//         <div className='max-w-[1240px] mx-auto border-t-2 flex flex-col'>
//             <div className='my-[24px] flex gap-2'><span className="text-black/60">Home</span> <Image src='/svgs/dropdownicon.svg' alt="Drop Down" height={16} width={16} className="transform rotate-90 text-black/60" /><span>Shop</span></div>
//             <div className='flex gap-5'>
//                 <FilterSidebar />
//                 <div className='w-[925px] h-auto flex flex-col'>
//                     <div className='w-full mb-[16px] flex items-center justify-between'>
//                         <h3 className='text-[32px] font-bold'>Casual</h3>
//                         <p className="text-[16px] text-[rgba(0,0,0,0.6)] flex gap-2">
//                             Showing 1-10 of 100 Products
//                             Sort by: <span className="text-black">Most Popular</span>
//                             <Image src='/svgs/dropdownicon.svg' alt="Drop Down" height={16} width={16} className="transform rotate-180" />
//                         </p>
//                     </div>
//                     <div className='grid grid-cols-3 md:grid-cols-1 gap-4'>
//                         {data.map((product, index) => (
//                             <ProductCard key={index} product={product} />
//                         ))}
//                     </div>
//                     <div className="w-full border h-0 mt-[64px] mb-[40px]" />
//                     <Pagination />
//                 </div>
//             </div>
//         </div>
//     );
// };

// const Pagination = () => (
//     <div className="w-full h-[40px] flex items-center justify-between">
//         <div className="flex gap-2">
//             <Image src='/svgs/dropdownicon.svg' alt="Drop Down" height={20} width={20} className="transform rotate-[-90deg]" /> 
//             Previous
//         </div>
//         <div className="flex">
//             <PageNumber number={1} active />
//             <PageNumber number={2} />
//             <PageNumber number={3} />
//             <span className="w-10 h-10 flex items-center justify-center">...</span>
//             <PageNumber number={4} />
//             <PageNumber number={5} />
//             <PageNumber number={6} />
//         </div>
//         <div className="flex gap-2">
//             Next 
//             <Image src='/svgs/dropdownicon.svg' alt="Drop Down" height={20} width={20} className="transform rotate-90" />
//         </div>
//     </div>
// );

// const PageNumber = ({ number, active }: { number: number, active?: boolean }) => (
//     <div className={`w-10 h-10 ${active ? 'bg-[rgba(0,0,0,0.06)]' : ''} rounded-lg flex items-center justify-center`}>
//         {number}
//     </div>
// );

// export default Page;
"use client"
import React, { useEffect, useState } from "react";

import ProductCard from "@/Components/ProductCard";
import { getProducts } from "@/lib/fetchDataFromSanity";

const Page = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto border-t-2 flex flex-col">
      <div className="my-[24px] flex gap-2">
        <span className="text-black/60">Home</span>{" "}
        <span>Shop</span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-1 gap-4">
        {products.map((product) => (
          <ProductCard  product={product} />
        ))}
      </div>
    </div>
  );
};

export default Page;
