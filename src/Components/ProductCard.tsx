import React from "react";
import Image from "next/image";
import { Product } from "@/types/product.types";

type ProductCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

    if (!product) {
        return <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] text-2xl flex items-center justify-center">Product data is missing!</div>;
    }

    const { title, srcUrl, price, discount, rating } = product;
    const discountedPrice = discount.percentage
        ? price - discount.amount
        : null;

    return (
        <div className="flex flex-col gap-4">
            {/* Product Image */}
            <Image src={srcUrl} alt={title} height={295} width={295} priority className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] bg-center bg-contain bg-no-repeat hover:scale-110 transition-all duration-200 ease-in" />

            {/* Product Details */}
            <div className="flex flex-col gap-2">
                <h3 className="text-[20px] font-semibold">{title || "Unknown Product"}</h3>

                {/* Rating System */}
                <div className="flex">
                    {Array.from({ length: Math.floor(rating) }).map((_, i) => (
                        <Image
                            key={i}
                            src="/svgs/staricon.svg"
                            alt="star icon"
                            height={18}
                            width={18}
                        />
                    ))}
                    {/* Half Star for Decimal Rating */}
                    {rating % 1 !== 0 && (
                        <Image
                            src="/svgs/half-staricon.svg"
                            alt="half star icon"
                            height={16}
                            width={8}
                        />
                    )}
                </div>

                {/* Price Display */}
                <p className="text-lg">
                    {discountedPrice ? (
                        <>
                            <span className="line-through text-gray-400">${price}</span>{" "}
                            <span className="text-red-500">${discountedPrice}</span>
                        </>
                    ) : (
                        <span className="font-bold text-[24px]">${price}</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
