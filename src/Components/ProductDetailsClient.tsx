"use client";

import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
import React from "react";
import SuggestedProducts from "@/Components/SuggestedProducts";
import ProductReviews from "@/Components/ProductReviews";

type ProductProps = {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    discountPercent?: number;
    isNew?: boolean;
    colors?: string[];
    sizes?: string[];
};

const ProductDetailClient = ({ product }: { product: ProductProps }) => {
    return (
        <div className="max-w-[1240px] h-auto mx-auto border-t border-solid border-[rgba(0,0,0,0.3)]">
            {/* Pagination */}
            <div className="mt-[24px] mb-[36px] flex gap-2">
                <span className="text-black/60">Home</span>
                <Image
                    src="/svgs/dropdownicon.svg"
                    alt="Drop Down"
                    height={16}
                    width={16}
                    className="transform rotate-90 text-black/60"
                />
                <span className="text-black/60">Shop</span>
                <Image
                    src="/svgs/dropdownicon.svg"
                    alt="Drop Down"
                    height={16}
                    width={16}
                    className="transform rotate-90 text-black/60"
                />
                <span className="text-black/60">Men</span>
                <Image
                    src="/svgs/dropdownicon.svg"
                    alt="Drop Down"
                    height={16}
                    width={16}
                    className="transform rotate-90 text-black/60"
                />
                <span>{product.category.toUpperCase()}</span>

            </div>

            {/* Product Details */}
            <div className="flex gap-10 mb-[60px] w-full">
                <div className="flex gap-[14px] shrink-0 w-[50%]">
                    <Image
                        src={product.imageUrl}
                        alt="Product Image"
                        height={2000}
                        width={2000}
                        className="rounded-[20px]"      
                    />
                </div>
                <div className="w-[50%]">
                    <h1 className={cn([integralCF.className, "font-bold text-[40px] uppercase"])}>
                        {product.name}
                    </h1>
                    <div className="flex gap-2 my-[14px]">
                        {[...Array(4)].map((_, i) => (
                            <Image
                                key={i}
                                src="/svgs/staricon.svg"
                                alt="star icon"
                                height={24.71}
                                width={24.71}
                            />
                        ))}
                        <Image
                            src="/svgs/half-staricon.svg"
                            alt="star icon"
                            height={22}
                            width={11}
                        />
                        <p>
                            4.5/<span className="text-black/60">5</span>
                        </p>
                    </div>
                    <div className="flex gap-3 items-center mb-5">
                        <p className="text-[32px] font-bold">${product.price}</p>
                        <p className="line-through text-black/30 text-[32px] font-bold">
                            ${(product.price * (100 + (product.discountPercent || 0))) / 100}
                        </p>
                        {product.discountPercent && (
                            <div className="w-[72px] h-[34px] bg-red-100 text-[#FF3333] flex items-center justify-center rounded-[62px]">
                                -{product.discountPercent}%
                            </div>
                        )}
                    </div>

                    <p className="text-black/60 text-[16px]">{product.description}</p>

                    {/* Separator */}
                    {/* <div className="w-full h-0 border-b border-solid border-black/30 my-[24px]" /> */}

                    {/* Color Options */}
                    {/* {product.colors && (
                        <div>
                            <p className="text-black/60">Select Colors</p>
                            <div className="flex gap-4 mt-[16px]">
                                {product.colors.map((color, index) => (
                                    <div
                                        key={index}
                                        className={`w-[36px] h-[36px] rounded-full flex items-center justify-center`}
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>
                        </div>
                    )} */}

                    {/* Separator */}
                    <div className="w-full h-0 border-b border-solid border-black/30 my-[24px]" />

                    {/* Sizes Option */}
                    {product.sizes && (
                        <div>
                            <p className="text-black/60">Choose Size</p>
                            <div className="mt-4 flex gap-3">
                                {product.sizes.map((size, index) => (
                                    <div
                                        key={index}
                                        className="py-3 px-[24px] rounded-[62px] text-black/70 bg-[#F0F0F0] inline-block hover:bg-black hover:text-[#F0F0F0] transition-all duration-300 ease-linear"
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Separator */}
                    <div className="w-full h-0 border-b border-solid border-black/30 my-[24px]" />

                    {/* Action Section */}
                    <div className="flex gap-5">
                        {/* Quantity Buttons */}
                        <div className="relative flex items-center justify-center px-[20px] py-[16px] gap-5 bg-gray-200 rounded-full">
                            <div className="w-5 h-5 flex-none">
                                <Image
                                    src="/svgs/negetiveicon.svg"
                                    alt="Minus icon"
                                    width={20}
                                    height={20}
                                />
                            </div>
                            <p className="text-[14px] font-medium text-black">1</p>
                            <div className="w-5 h-5 flex-none">
                                <Image
                                    src="/svgs/positiveicon.svg"
                                    alt="Plus icon"
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        {/* Add to Cart button */}
                        <button className="bg-black text-white px-[54px] py-[16px] w-full rounded-[62px]">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <ProductReviews />
            <SuggestedProducts />
        </div>
    );
};

export default ProductDetailClient;

