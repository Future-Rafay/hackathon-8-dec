import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@/types/product.types";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";

export const topSellingData: Product[] = [
  {
    id: 5,
    title: "Vertical Striped Shirt",
    srcUrl: "/images/Products/pic5.png",
    gallery: ["/images/Products/pic5.png", "/images/Products/pic10.png", "/images/Products/pic11.png"],
    price: 232,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 5.0,
  },
  {
    id: 6,
    title: "Courage Graphic T-shirt",
    srcUrl: "/images/Products/pic6.png",
    gallery: ["/images/Products/pic6.png", "/images/Products/pic10.png", "/images/Products/pic11.png"],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.0,
  },
  {
    id: 7,
    title: "Loose Fit Bermuda Shorts",
    srcUrl: "/images/Products/pic7.png",
    gallery: ["/images/Products/pic7.png"],
    price: 80,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.0,
  },
  {
    id: 8,
    title: "Faded Skinny Jeans",
    srcUrl: "/images/Products/pic8.png",
    gallery: ["/images/Products/pic8.png"],
    price: 210,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
];

const TopSelling = () => {
  return (
    <div className="max-w-[1240px] mx-auto h-auto mt-[72px]">
      <h1 className={cn([ integralCF.className,"text-[48px] font-bold uppercase text-center mb-[55px]"])}>top selling</h1>
      <div className="flex gap-5 overflow-x-auto justify-center">
        {topSellingData.map((product) => (
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

export default TopSelling;
