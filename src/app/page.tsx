import Category from "@/Components/Category";
import HeroSection from "@/Components/HeroSection";
import NewArrival from "@/Components/NewArrival";
import Testimonials from "@/Components/Testimonials";
import TopSelling from "@/Components/TopSelling";

import { Product } from "@/types/product.types";

export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/Products/pic12.png",
    gallery: [
      "/images/Products/pic12.png",
      "/images/Products/pic10.png",
      "/images/Products/pic11.png",
    ],
    price: 242,
    discount: {
      amount: 0,
      percentage: 20,
    },
    rating: 4.0,
  },
  {
    id: 13,
    title: "Gradient Graphic T-shirt",
    srcUrl: "/images/Products/pic13.png",
    gallery: [
      "/images/Products/pic13.png",
      "/images/Products/pic10.png",
      "/images/Products/pic11.png",
    ],
    price: 145,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 3.5,
  },
  {
    id: 14,
    title: "Polo with Tipping Details",
    srcUrl: "/images/Products/pic14.png",
    gallery: [
      "/images/Products/pic14.png",
    ],
    price: 180,
    discount: {
      amount: 0,
      percentage: 0,
    },
    rating: 4.5,
  },
  {
    id: 15,
    title: "Black Striped T-shirt",
    srcUrl: "/images/Products/pic15.png",
    gallery: [
      "/images/Products/pic15.png",
    ],
    price: 150,
    discount: {
      amount: 0,
      percentage: 30,
    },
    rating: 5.0,
  },
];


export default function Home() {
  return (
    <div>
      <HeroSection />
      <NewArrival />
      <div className="my-[64px] max-w-[1240px] mx-auto h-0 border border-solid" />
      <TopSelling />
      <Category />
      <Testimonials />
    </div>
  );
}
