// import React from "react";
// import Image from "next/image";
// import { Product } from "@/types/product.types";
// import Link from "next/link";

// type ProductCardProps = {
//     product: Product;
// };

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

//     if (!product) {
//         return <div className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] text-2xl flex items-center justify-center">Product data is missing!</div>;
//     }

//     const { title, srcUrl, price, discount, rating } = product;
//     const discountedPrice = discount.percentage
//         ? price - discount.amount
//         : null;

//     return (
//         <div className="flex flex-col gap-4 shrink-0">
//             {/* Product Image */}
//             <Link href='/product'><Image src={srcUrl} alt={title} height={295} width={298} priority className="w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px] bg-center bg-contain bg-no-repeat" /></Link>

//             {/* Product Details */}
//             <div className="flex flex-col gap-2">
//                 <h3 className="text-[20px] font-semibold">{title || "Unknown Product"}</h3>

//                 {/* Rating System */}
//                 <div className="flex">
//                     {Array.from({ length: Math.floor(rating) }).map((_, i) => (
//                         <Image
//                             key={i}
//                             src="/svgs/staricon.svg"
//                             alt="star icon"
//                             height={18}
//                             width={18}
//                         />
//                     ))}
//                     {/* Half Star for Decimal Rating */}
//                     {rating % 1 !== 0 && (
//                         <Image
//                             src="/svgs/half-staricon.svg"
//                             alt="half star icon"
//                             height={16}
//                             width={8}
//                         />
//                     )}
//                 </div>

//                 {/* Price Display */}
//                 <p className="text-lg">
//                     {discountedPrice ? (
//                         <>
//                             <span className="line-through text-gray-400">${price}</span>{" "}
//                             <span className="text-red-500">${discountedPrice}</span>
//                         </>
//                     ) : (
//                         <span className="font-bold text-[24px]">${price}</span>
//                     )}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default ProductCard;


import React from "react";
import Image from "next/image";

interface ProductProps {
  product: {
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
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const {
    _id,
    name,
    imageUrl,
    price,
    discountPercent,
    isNew,
    colors,
    sizes,
  } = product;

  const discountedPrice = discountPercent
    ? (price * (100 - discountPercent)) / 100
    : price;

  return (
    <div className="border p-4 rounded-lg">
      <Image
        src={imageUrl}
        alt={name}
        width={200}
        height={200}
        className="rounded"
      />
      {isNew && <span className="text-green-500">New</span>}
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <div className="flex items-center gap-2 mt-2">
        <span className="text-xl font-bold">
          ${discountedPrice.toFixed(2)}
        </span>
        {discountPercent && (
          <span className="text-sm text-red-500">
            -{discountPercent}% Off
          </span>
        )}
      </div>
      <p className="text-sm mt-2 text-gray-600">{`Colors: ${
        colors?.join(", ") || "N/A"
      }`}</p>
      <p className="text-sm text-gray-600">{`Sizes: ${
        sizes?.join(", ") || "N/A"
      }`}</p>
    </div>
  );
};

export default ProductCard;
