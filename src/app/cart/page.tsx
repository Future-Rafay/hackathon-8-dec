// "use client"
// import { cn } from '@/lib/utils';
// import { integralCF } from '@/styles/fonts';
// import Image from 'next/image';
// import React, { useState } from 'react';

// const Page = () => {
//     const [cartItems, setCartItems] = useState([
//         {
//             id: 1,
//             name: 'Gradient Graphic T-shirt',
//             size: 'Large',
//             color: 'White',
//             price: 145,
//             image: '/images/Products/pic13.png',
//             quantity: 1,
//         },
//         {
//             id: 2,
//             name: 'Checkered Shirt',
//             size: 'Medium',
//             color: 'Red',
//             price: 145,
//             image: '/images/Products/pic3.png',
//             quantity: 1,
//         },
//         {
//             id: 3,
//             name: 'Skinny Fit Jeans',
//             size: 'Large',
//             color: 'White',
//             price: 145,
//             image: '/images/Products/pic2.png',
//             quantity: 1,
//         },
//     ]);

//     const updateQuantity = (id: number, delta : number) => {
//         setCartItems(cartItems.map(item =>
//             item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
//         ));
//     };

//     const calcTotal = () => {
//         return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//     };

//     return (
//         <div className='max-w-[1240px] h-auto mx-auto border-t border-solid border-[rgba(0,0,0,0.3)]'>
//             <div>
//             <div className='my-[24px] flex gap-2'><span className="text-black/60">Home</span> <Image src='/svgs/dropdownicon.svg' alt="Drop Down" height={16} width={16} className="transform rotate-90 text-black/60" /><span>Cart</span></div>
//                 <h1 className={cn([integralCF.className ,'text-[40px] font-bold'])}>Your cart</h1>
//             </div>
//             <div className='flex gap-[20px]  mt-[24px]'>
//                 <div className='w-[715px] h-auto rounded-[20px] border-2 px-6 py-5'>
//                     <div className='flex flex-col gap-6'>
//                         {cartItems.map(item => (
//                             <div key={item.id} className='w-full h-[124px] flex gap-4'>
//                                 <Image src={item.image} alt={item.name} height={124} width={124} priority className='rounded-[8.66px] bg-[#F0EEED]' />
//                                 <div className='flex w-full justify-between'>
//                                     <div className='flex flex-col justify-between'>
//                                         <div>
//                                             <h3 className='text-[20px] font-bold'>{item.name}</h3>
//                                             <p className='text-[14px]'>
//                                                 Size: <span className='text-[rgba(0,0,0,0.5)]'>{item.size}</span>
//                                             </p>
//                                             <p className='text-[14px]'>
//                                                 Color: <span className='text-[rgba(0,0,0,0.5)]'>{item.color}</span>
//                                             </p>
//                                         </div>
//                                         <p className='text-[24px] font-bold'>${item.price}</p>
//                                     </div>
//                                     <div className='w-[225px] h-full relative'>
//                                         <button className='absolute right-0 top-0'>
//                                             <Image src='/svgs/trashcan.svg' alt='Delect button' height={24} width={24} />
//                                         </button>
//                                         <div className='absolute bottom-0 right-0'>
//                                             <div className="relative flex items-center justify-center p-3 gap-5 w-32 h-11 bg-gray-200 rounded-full">
//                                                 {/* Frame 1 */}
//                                                 <div className="w-5 h-5 flex-none order-1 flex-shrink-0 relative">
//                                                     <div className="w-5 h-5 flex-none order-0 flex-shrink-0">
//                                                         <Image src='/svgs/negetiveicon.svg' alt='Minus icon' width={20} height={20} onClick={() => updateQuantity(item.id, -1)} />
//                                                     </div>
//                                                 </div>

//                                                 {/* Text inside Frame */}
//                                                 <div className="w-5 h-5 flex-none order-1 flex-shrink-0">
//                                                     <p className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[14px] font-medium text-black">
//                                                         {item.quantity}
//                                                     </p>
//                                                 </div>

//                                                 {/* Frame 2 */}
//                                                 <div className="w-5 h-5 flex-none order-2 flex-shrink-0 relative">
//                                                     <div className="w-5 h-5 flex-none order-2 flex-shrink-0">
//                                                         <Image src='/svgs/positiveicon.svg' alt='Plus icon' width={20} height={20} onClick={() => updateQuantity(item.id, 1)} />
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                         <div className='w-full h-0 border' />
//                     </div>
//                 </div>
//                 <div className='w-[505px] h-[458px] relative'>
//                     <div className="absolute top-276 left-835 w-full h-full p-5 flex flex-col items-start gap-6 border-2 rounded-2xl">
//                         {/* Order Summary Header */}
//                         <div className="w-44 h-8 font-bold text-xl text-black">
//                             Order Summary
//                         </div>

//                         {/* Summary details */}
//                         <div className="flex flex-col items-start gap-5 w-[457px] h-48">
//                             <div className="flex justify-between items-center w-full h-7">
//                                 <div className="w-18 h-7 font-normal text-lg text-gray-600">Subtotal</div>
//                                 <div className="w-12 h-7 font-bold text-lg text-black text-right">${calcTotal()}</div>
//                             </div>
//                             <div className="flex justify-between items-center w-full h-7">
//                                 <div className="w-36 h-7 font-normal text-lg text-gray-600">Discount (-20%)</div>
//                                 <div className="w-12 h-7 font-bold text-lg text-red-500 text-right">-${(calcTotal() * 0.2).toFixed(2)}</div>
//                             </div>
//                             <div className="flex justify-between items-center w-full h-7">
//                                 <div className="w-28 h-7 font-normal text-lg text-gray-600">Delivery Fee</div>
//                                 <div className="w-8 h-7 font-bold text-lg text-black text-right">$15</div>
//                             </div>
//                             <div className="w-114 h-0 border-t border-gray-100"></div>
//                             <div className="flex justify-between items-center w-full h-7">
//                                 <div className="w-10 h-7 font-normal text-lg text-black">Total</div>
//                                 <div className="w-14 h-8 font-bold text-xl text-right">${(calcTotal() * 0.8 + 15).toFixed(2)}</div>
//                             </div>
//                         </div>

//                         {/* Promo code and checkout button */}
//                         <div className="flex items-center justify-center w-[457px] h-12 gap-3">
//                             <div className="flex items-start justify-start w-[326px] h-12 bg-gray-200 rounded-full p-3">
//                                 <Image src='/svgs/tagicon.svg' alt='tag icon' width={24} height={24} />
//                                 <div className="ml-3 font-normal text-[16px] text-gray-400">Add promo code</div>
//                             </div>
//                             <button className="w-[119px] h-12 bg-black rounded-full p-3 flex items-center justify-center">
//                                 <span className="font-medium text-lg text-white">Apply</span>
//                             </button>
//                         </div>

//                         <button className="w-[457px] h-[60px] bg-black rounded-full p-4 flex gap-3 items-center justify-center">
//                             <span className="font-medium text-[16px] text-white">Go to Checkout</span>
//                             <Image src='/svgs/arrowicon.svg' alt='Arrow icon' height={24} width={24} className='hover:translate-x-4 transition-all duration-300 ease-linear' />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Page;

"use client";


import { useCartStore } from "@/lib/useCartStore";
import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Image from "next/image";
// Import your Zustand store

const Page = () => {
    const { items, removeItem, increaseQuantity, decreaseQuantity, totalPrice } = useCartStore();

    return (
        <div className="max-w-[1240px] mx-auto border-t border-solid border-[rgba(0,0,0,0.3)]">
            {/* Breadcrumb */}
            <div className="my-6 flex gap-2">
                <span className="text-black/60">Home</span>
                <Image src="/svgs/dropdownicon.svg" alt="Drop Down" height={16} width={16} className="transform rotate-90 text-black/60" />
                <span>Cart</span>
            </div>

            {/* Page Title */}
            <h1 className={cn([integralCF.className, "text-[40px] font-bold"])}>Your cart</h1>

            {/* Main Content */}
            <div className="flex gap-5 mt-6">
                {/* Cart Items Section */}
                <div className="w-[715px] rounded-[20px] border-2 p-6">
                    <div className="flex flex-col gap-6">
                        {items.length > 0 ? (
                            items.map((item) => (
                                <div key={item._id} className="flex gap-4">
                                    {/* Product Image */}
                                    <Image src={item.imageUrl} alt={item.name} height={124} width={124} className="rounded-[8.66px] bg-[#F0EEED]" />

                                    {/* Product Info */}
                                    <div className="flex w-full justify-between">
                                        <div className="flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-[20px] font-bold">{item.name}</h3>
                                                {/* <p className="text-[14px]">Size: <span className="text-[rgba(0,0,0,0.5)]">{item.size}</span></p>
                                                <p className="text-[14px]">Color: <span className="text-[rgba(0,0,0,0.5)]">{item.color}</span></p> */}
                                            </div>
                                            <p className="text-[24px] font-bold">${item.price}</p>
                                        </div>

                                        {/* Quantity Controls */}
                                        <div className="flex flex-col items-end gap-2">
                                            <button onClick={() => removeItem(item._id)}>
                                                <Image src="/svgs/trashcan.svg" alt="Delete" height={24} width={24} />
                                            </button>
                                            <div className="flex items-center gap-2 bg-gray-200 p-3 rounded-full">
                                                <Image
                                                    src="/svgs/negetiveicon.svg"
                                                    alt="Minus"
                                                    width={20}
                                                    height={20}
                                                    onClick={() => decreaseQuantity(item._id)}
                                                />
                                                <span className="text-black">{item.quantity}</span>
                                                <Image
                                                    src="/svgs/positiveicon.svg"
                                                    alt="Plus"
                                                    width={20}
                                                    height={20}
                                                    onClick={() => increaseQuantity(item._id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">Your cart is empty.</p>
                        )}
                        <div className="w-full border-t" />
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="w-[505px] p-6 border-2 rounded-2xl">
                    <h2 className="text-xl font-bold">Order Summary</h2>
                    <div className="flex flex-col gap-5 mt-4">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-bold">${totalPrice}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Discount (-20%)</span>
                            <span className="font-bold text-red-500">-${(totalPrice * 0.2).toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Delivery Fee</span>
                            <span className="font-bold">$15</span>
                        </div>
                        <div className="border-t my-3" />
                        <div className="flex justify-between">
                            <span className="font-bold">Total</span>
                            <span className="font-bold text-xl">${(totalPrice * 0.8 + 15).toFixed(2)}</span>
                        </div>
                    </div>

                    {/* Promo Code */}
                    <div className="mt-4 flex gap-3">
                        <div className="flex items-center p-3 bg-gray-200 rounded-full w-full">
                            <Image src="/svgs/tagicon.svg" alt="Promo code" width={24} height={24} />
                            <span className="ml-3 text-gray-400">Add promo code</span>
                        </div>
                        <button className="bg-black text-white rounded-full px-5">Apply</button>
                    </div>

                    {/* Checkout Button */}
                    <button className="mt-6 w-full bg-black text-white rounded-full p-4 flex items-center justify-center gap-3 hover:bg-gray-800 transition duration-300">
                        Go to Checkout
                        <Image src="/svgs/arrowicon.svg" alt="Arrow" height={24} width={24} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
