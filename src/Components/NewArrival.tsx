"use client"

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { getNewArrivalProducts } from "@/lib/fetchDataFromSanity";


const NewArrival = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data  = await getNewArrivalProducts();
      setProducts(data);
    };
    fetchProducts();
    
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto h-auto mt-[72px]">
      <h1 className={cn([ integralCF.className,"text-[48px] font-bold uppercase text-center mb-[55px]"])}>New Arrivals</h1>
      <div className="flex gap-5 overflow-x-auto justify-center">
        {products.map((product) => (
          <ProductCard key={product} product={product} />
        ))}
      </div>
      <button className="w-[218px] h-[52px] rounded-[62px] border border-[rgba(0,0,0,0.3)] text-[16px] font-medium flex items-center justify-center mt-[36px] mx-auto hover:bg-black hover:text-white transition-all duration-300 ease-linear">
      <Link href='/shop'>
        View All
        </Link>
      </button>
    </div>
  );
};

export default NewArrival;
