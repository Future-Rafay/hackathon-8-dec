import Category from "@/Components/Category";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import NewArrival from "@/Components/NewArrival";
import Testimonials from "@/Components/Testimonials";
import TopSelling from "@/Components/TopSelling";


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
