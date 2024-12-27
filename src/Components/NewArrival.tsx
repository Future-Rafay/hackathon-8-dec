import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import Link from "next/link";
import { integralCF } from "@/styles/fonts";
import { cn } from "@/lib/utils";

export const newArrivalsData: Product[] = [
  {
    id: 1,
    title: "T-shirt with Tape Details",
    srcUrl: "/images/Products/pic1.png", 
    gallery: ["/images/Products/pic1.png", "/images/Products/pic10.png", "/images/Products/pic11.png"],
    price: 120,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 2,
    title: "Skinny Fit Jeans",
    srcUrl: "/images/Products/pic2.png",
    gallery: ["/images/Products/pic2.png"],
    price: 260,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 3.5,
  },
  {
    id: 3,
    title: "Checkered Shirt",
    srcUrl: "/images/Products/pic3.png",
    gallery: ["/images/Products/pic3.png"],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 4,
    title: "Sleeve Striped T-shirt",
    srcUrl: "/images/Products/pic4.png",
    gallery: ["/images/Products/pic4.png", "/images/Products/pic10.png", "/images/Products/pic11.png"],
    price: 160,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 4.5,
  },
];

const NewArrival = () => {
  return (
    <div className="max-w-[1240px] mx-auto h-auto mt-[72px]">
      <h1 className={cn([ integralCF.className,"text-[48px] font-bold uppercase text-center mb-[55px]"])}>New Arrivals</h1>
      <div className="flex gap-5 overflow-x-auto justify-center">
        {newArrivalsData.map((product) => (
          <ProductCard key={product.id} product={product} />
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
