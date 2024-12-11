import type { Metadata } from "next";
import "@/styles/globals.css";
import TopHeader from "@/Components/TopHeader";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { satoshi } from "@/styles/fonts";


export const metadata: Metadata = {
  title: "SHOP.CO - E-Commerce Clothing Website",
  description: "A modern e-commerce platform built with Next.js, Tailwind CSS, offering a responsive and seamless shopping experience."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body className={satoshi.className}>
        <TopHeader />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
