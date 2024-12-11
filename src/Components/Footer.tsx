import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// import { GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  const paymentMethods = [
    '/images/PaymentMethod/visa.png',
    '/images/PaymentMethod/mastercard.png',
    '/images/PaymentMethod/paypal.png',
    '/images/PaymentMethod/applepay.png',
    '/images/PaymentMethod/googlepay.png',
  ];

  const socialIcons = [
    { src: '/svgs/twitter.svg', alt: 'Twitter' },
    { src: '/svgs/facebook.svg', alt: 'Facebook' },
    { src: '/svgs/insta.svg', alt: 'Instagram' },
    { src: '/svgs/github.svg', alt: 'GitHub' },
  ];

  const sections = [
    {
      title: 'COMPANY',
      links: ['About', 'Features', 'Works', 'Career'],
    },
    {
      title: 'HELP',
      links: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'],
    },
    {
      title: 'FAQ',
      links: ['Account', 'Manage Deliveries', 'Orders', 'Payments'],
    },
    {
      title: 'RESOURCES',
      links: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'],
    },
  ];

  return (
    <div className="max-w-[1440px] h-[589px] mx-auto">
      {/* Newsletter Section */}
      <div className="max-w-[1240px] mx-auto relative bottom-[-90px] h-[180px] py-[36px] px-[64px] bg-black rounded-[20px] flex items-center justify-between shadow-md">
        <h1 className="text-[36px] font-bold text-white w-[555px] leading-tight">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col gap-[14px] w-[349px]">
          <div className="flex items-center gap-3 w-full h-[48px] rounded-[62px] px-[16px] py-[12px] bg-white shadow-sm">
            <Image src='/svgs/mailicon.svg' alt='Mail Icon' height={24} width={24} />
            <input
              type="text"
              placeholder="Enter your email address"
              className="outline-none flex-1 text-gray-600"
            />
          </div>
          <button className="w-full h-[46px] flex items-center justify-center rounded-[62px] bg-white font-medium hover:shadow-md transition">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-[#F0F0F0] text-gray-600">
        <div className="max-w-[1240px] px-5 pt-[140px] pb-[50px] mx-auto flex flex-wrap justify-between gap-10">
          <div className="w-64">
            <h1 className="text-3xl font-bold text-black">SHOP.CO</h1>
            <p className="mt-2 text-sm text-gray-500">
              We have clothes that suit your style and make you proud to wear them.
            </p>
            <div className="flex mt-5 space-x-3">
              {socialIcons.map((icon) => (
                <Image
                  key={icon.alt}
                  src={icon.src}
                  alt={icon.alt}
                  width={28}
                  height={28}
                  className="hover:scale-110 transition-transform"
                />
              ))}
            </div>
          </div>
          {sections.map((section) => (
            <div key={section.title} className="min-w-[150px]">
              <h2 className="font-bold mb-3 text-gray-800">{section.title}</h2>
              <ul>
                {section.links.map((link) => (
                  <li key={link} className="mb-1">
                    <a href="#" className="hover:text-gray-800 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-gray-300 mx-auto w-full max-w-[1240px]" />
        <div className="flex items-center justify-between max-w-[1240px] px-5 py-8 mx-auto">
          <p className="text-sm text-gray-500">
            © Shop.co 2000-2023 | Made by{' '}
            <Link
              href="https://my-portfolio-animated-abdul-rafays-projects-87eac4f7.vercel.app/"
              target="_blank"
              className="underline hover:underline-offset-4"
            >
              Abdul Rafay
            </Link>
          </p>
          <div className="flex space-x-4">
            {paymentMethods.map((src, idx) => (
              <Image
                key={idx}
                src={src}
                alt="Payment Method"
                width={46}
                height={30}
                className="hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div>
      </footer>
    </div>

  );
};

export default Footer;
