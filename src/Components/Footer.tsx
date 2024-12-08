// import React from 'react'

// const Footer = () => {
//     return (
//         <div>
            // <div className='max-w-[1240px] h-[180px] py-[36px] px-[64px] bg-black rounded-[20px] flex items-center justify-between'>
            //     <h1 className='text-[40px] text-bold text-white w-[555px]'>
            //         STAY UPTO DATE ABOUT OUR LATEST OFFERS
            //     </h1>
            //     <div className='flex flex-col gap-[14px]'>
            //         <div className='flex items-center gap-3 w-[349px] h-[48px]  rounded-[62px] px-[16px] py-[12px] bg-white'>
            //             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            //                 <path d="M21 4.125H3C2.70163 4.125 2.41548 4.24353 2.2045 4.4545C1.99353 4.66548 1.875 4.95163 1.875 5.25V18C1.875 18.4973 2.07254 18.9742 2.42417 19.3258C2.77581 19.6775 3.25272 19.875 3.75 19.875H20.25C20.7473 19.875 21.2242 19.6775 21.5758 19.3258C21.9275 18.9742 22.125 18.4973 22.125 18V5.25C22.125 4.95163 22.0065 4.66548 21.7955 4.4545C21.5845 4.24353 21.2984 4.125 21 4.125ZM12 11.9738L5.89219 6.375H18.1078L12 11.9738ZM8.69906 12L4.125 16.1925V7.8075L8.69906 12ZM10.3641 13.5262L11.2397 14.3297C11.4472 14.52 11.7185 14.6255 12 14.6255C12.2815 14.6255 12.5528 14.52 12.7603 14.3297L13.6359 13.5262L18.1078 17.625H5.89219L10.3641 13.5262ZM15.3009 12L19.875 7.8075V16.1925L15.3009 12Z" fill="black" fill-opacity="0.4" />
            //             </svg>
            //             <input type="text" placeholder='Enter your email address' className='outline-none' />
            //         </div>

            //         <button className='w-[349px] h-[46px] flex items-center justify-center rounded-[62px] px-[16px] py-[12px] bg-white font-medium'>Subscribe to Newsletter</button>
            //     </div>
            // </div>
//         </div>
//     )
// }

// export default Footer;


import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="text-gray-600 body-font bg-[#F0F0F0]">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                            <span className="ml-10 text-3xl font-bold text-black">SHOP.CO</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">
                            We have clothes that suits your style and which you're proud to wear.
                            From women to men
                        </p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-satoshi text-gray-900 tracking-widest text-sm mb-3">
                                COMPANY
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">About</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Features</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Works</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Career</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                HELP
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Customer Support</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Delivery Details</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Terms & Conditions</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Privacy Policy</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                FAQ
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Account</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Manage Deliveries</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Orders</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Payments</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                                RESOURCES
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Free eBooks</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Development Tutorial</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">How to - Blog</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Youtube Playlist</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="mb-[25px] max-w-[1240px] mx-auto h-0 border border-[rgba(0,0,0,0.3)] border-solid" />
                <div className="bg-gray-100 pb-[88px]">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col justify-between sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">
                            Shop.co © 2000-2023 All Rights Reserved

                        </p>
                        <div className='w-[281px] h-[30px] flex justify-between'>
                            <img src="/images/PaymentMethod/visa.png" alt="payment method image" className='w-[46px] h-[30px]' />
                            <img src="/images/PaymentMethod/mastercard.png" alt="payment method image" className='w-[46px] h-[30px]' />
                            <img src="/images/PaymentMethod/paypal.png" alt="payment method image" className='w-[46px] h-[30px]' />
                            <img src="/images/PaymentMethod/applepay.png" alt="payment method image" className='w-[46px] h-[30px]' />
                            <img src="/images/PaymentMethod/googlepay.png" alt="payment method image" className='w-[46px] h-[30px]' />
                        </div>

                        {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg
                                    fill="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500">
                                <svg
                                    fill="currentColor"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={0}
                                    className="w-5 h-5"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="none"
                                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                    />
                                    <circle cx={4} cy={4} r={2} stroke="none" />
                                </svg>
                            </a>
                        </span> */}
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer