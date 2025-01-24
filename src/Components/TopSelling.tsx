"use client"
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";
import { getTopSellingProducts } from "@/lib/fetchDataFromSanity";
import { Skeleton } from "./ui/skeleton";
// Import the Skeleton component

const TopSelling = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getTopSellingProducts();
        setProducts(data);
        setError(false); // Reset error state on successful fetch
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(true); // Set error state if fetching fails
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="max-w-[1240px] mx-auto h-auto mt-[72px]">
      <h1
        className={cn([integralCF.className, "text-[48px] font-bold uppercase text-center mb-[55px]"])}
      >
        top selling
      </h1>
      {error ? (
        <div className="text-red-500 text-center">
          Oops! Something went wrong. Please try again later.
        </div>
      ) : (
        <div className="flex gap-5 overflow-x-auto justify-center">
          {products.length === 0 ? (
            // Show skeleton loaders if products are loading
            Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="w-[295px] h-[298px] rounded-lg animate-pulse" />
            ))
          ) : (
            products.map((product) => (
              <ProductCard key={product} product={product} />
            ))
          )}
        </div>
      )}
      <button className="w-[218px] h-[52px] rounded-[62px] border border-[rgba(0,0,0,0.3)] text-[16px] font-medium flex items-center justify-center mt-[36px] mx-auto hover:bg-black hover:text-white transition-all duration-300 ease-linear">
        <Link href="/shop">View All</Link>
      </button>
    </div>
  );
};

export default TopSelling;

