import Category from "@/Components/Category";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import NewArrival from "@/Components/NewArrival";
import Testimonials from "@/Components/Testimonials";
import TopSelling from "@/Components/TopSelling";

import { Product } from "@/types/product.types";


export const relatedProductData: Product[] = [
  {
    id: 12,
    title: "Polo with Contrast Trims",
    srcUrl: "/images/pic12.png",
    gallery: ["/images/pic12.png", "/images/pic10.png", "/images/pic11.png"],
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
    srcUrl: "/images/pic13.png",
    gallery: ["/images/pic13.png", "/images/pic10.png", "/images/pic11.png"],
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
    srcUrl: "/images/pic14.png",
    gallery: ["/images/pic14.png"],
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
    srcUrl: "/images/pic15.png",
    gallery: ["/images/pic15.png"],
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
      <Footer />
    </div>
  );
}
