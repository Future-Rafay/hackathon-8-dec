import React from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

export interface ProductCardProps {
  product: {
    _id: string;
    name: string;
    price: number;
    imageUrl: string;
    discountPercent?: number;
    isNew?: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const {
    _id,
    name,
    price,
    discountPercent,
    isNew,
    imageUrl,
  } = product;

  if (!product) {
    return (
      <div className="w-[295px] h-[298px] bg-gray-100 rounded-xl text-xl flex items-center justify-center shadow-md">
        Product data is missing!
      </div>
    );
  }

  const discountedPrice = discountPercent
    ? (price * (100 - discountPercent)) / 100
    : price;

  return (
    <div className="group flex flex-col gap-4 w-[295px] bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform  hover:shadow-xl">
      {/* Product Image */}
      <div className="relative w-full h-[298px] bg-gray-100">
        <Link href={`/product/${_id}`}>
          <Image
            src={imageUrl ? urlFor(imageUrl).url() : '/images/image-not-found.png'} // Fallback to 'image-not-found.png' if imageUrl is unavailable
            alt={name || 'Product Image'} // Fallback alt text if `name` is unavailable
            layout="fill"
            objectFit="contain"
            className="transition-opacity group-hover:opacity-90"
            priority
          />

        </Link>

        {/* Badges */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded">
            New
          </span>
        )}
        {discountPercent ? (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-semibold px-2 py-1 rounded">
            {discountPercent}% Off
          </span>
        ) : null}

      </div>

      {/* Product Details */}
      <div className="flex flex-col gap-2 px-4 pb-4">
        <Link href={`/product/${_id}`}>
          <h3 className="text-lg font-semibold text-gray-800 truncate">
            {name || "Unknown Product"}
          </h3>
        </Link>

        {/* Price Display */}
        <div className="flex items-center gap-2 text-lg font-semibold">
          {discountPercent ? (
            <>
              <span className="line-through text-gray-400">${price}</span>
              <span className="text-red-500">${discountedPrice.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-gray-800">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;