import React from 'react'
import { relatedProductData } from "@/app/page";
import { topSellingData } from '@/Components/TopSelling';
import { newArrivalsData } from '@/Components/NewArrival';
import { Product } from "@/types/product.types";

const data: Product[] = [
  ...newArrivalsData,
  ...topSellingData,
  ...relatedProductData,
];


const ProductsDetailspage = ({
  params,
}: {
  params: { slug: string[] };
}) => {

  const productData = data.find(
    (product) => product.id === Number(params.slug[0])
  );

  if (!productData?.title) {
    // notFound
  }

console.log(productData)
  return (
    <div>
page
    </div>
  )
}

export default ProductsDetailspage;