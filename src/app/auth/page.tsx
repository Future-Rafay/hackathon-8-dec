import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div
      className="max-w-[1440px] mx-auto h-screen flex items-center justify-center bg-cover bg-center p-6 sm:p-12"
    style={{ backgroundImage: "url(/images/loginpagebg.jpg)" }}
    >
      <div className="w-full max-w-[440px] bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-lg text-white">
        {/* Heading Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create an Account</h1>
          <p className="text-sm text-gray-300">Enter your details below</p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              className="w-full bg-transparent border-b border-gray-400 text-sm placeholder:text-gray-300 focus:outline-none focus:border-red-500 transition-all"
              placeholder="Name"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              className="w-full bg-transparent border-b border-gray-400 text-sm placeholder:text-gray-300 focus:outline-none focus:border-red-500 transition-all"
              placeholder="Email or Phone Number"
            />
          </div>
          <div className="relative">
            <input
              type="password"
              className="w-full bg-transparent border-b border-gray-400 text-sm placeholder:text-gray-300 focus:outline-none focus:border-red-500 transition-all"
              placeholder="Password"
            />
          </div>

          {/* Buttons Section */}
          <button className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-all">
            Create Account
          </button>

          <div className="flex items-center justify-between my-4">
            <span className="h-px bg-gray-400 w-full"></span>
            <span className="px-4 text-sm text-gray-300">OR</span>
            <span className="h-px bg-gray-400 w-full"></span>
          </div>

          <button className="w-full py-3 flex items-center justify-center gap-4 border border-gray-400 text-white bg-transparent rounded-lg text-sm hover:bg-gray-100 hover:text-black transition-all">
            <Image
              priority
              src="/svgs/googleicon.svg"
              height={20}
              width={20}
              alt="Google Icon"
            />
            Sign up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
