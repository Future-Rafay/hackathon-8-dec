"use client"
import Image from "next/image";
import { useState } from "react";

export default function FilterSidebar() {
    const [price, setPrice] = useState([50, 200]);
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [dropdowns, setDropdowns] = useState({
        price: true,
        colors: true,
        size: true,
        dressStyle: true,
    });

    const toggleDropdown = (key: keyof typeof dropdowns) => {
        setDropdowns({ ...dropdowns, [key]: !dropdowns[key] });
    };

    return (
        <div className="w-72 bg-white border rounded-[20px] shadow-lg p-4 space-y-6">
            {/* Filters Header */}
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button className="text-gray-500 hover:text-black">
                    <i className="fas fa-sliders-h"></i> {/* Replace with icon */}
                </button>
            </div>

            {/* Categories */}
            <div className="space-y-2">
                {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category) => (
                    <button
                        key={category}
                        className="w-full text-left text-gray-700 hover:text-black"
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Price */}
            <div>
                <button
                    className="flex justify-between w-full text-left"
                    onClick={() => toggleDropdown("price")}
                >
                    <span className="font-medium">Price</span>
                    <span>{dropdowns.price ? <Image src='/svgs/dropdownicon.svg' alt="drop down icon" height={16} width={16} /> : <Image src='/svgs/dropdownicon.svg' alt="drop down icon" height={16} width={16} className="transform rotate-180" />}</span>
                </button>
                {dropdowns.price && (
                    <div className="mt-4">
                        <input
                            type="range"
                            min="50"
                            max="200"
                            value={price[0]}
                            onChange={(e) => setPrice([+e.target.value, price[1]])}
                            className="w-full"
                        />
                        <input
                            type="range"
                            min="50"
                            max="200"
                            value={price[1]}
                            onChange={(e) => setPrice([price[0], +e.target.value])}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm mt-2">
                            <span>${price[0]}</span>
                            <span>${price[1]}</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Colors */}
            <div>
                <button
                    className="flex justify-between w-full text-left"
                    onClick={() => toggleDropdown("colors")}
                >
                    <span className="font-medium">Colors</span>
                    <span>{dropdowns.colors ? <Image src='/svgs/dropdownicon.svg' alt="drop down icon" height={16} width={16} /> : <Image src='/svgs/dropdownicon.svg' alt="drop down icon" height={16} width={16} className="transform rotate-180" />}</span>
                </button>
                {dropdowns.colors && (
                    <div className="flex space-x-2 mt-4">
                        {["#00f", "#f00", "#ff0", "#0f0", "#ff1493", "#fff", "#000"].map(
                            (color) => (
                                <button
                                    key={color}
                                    className={`w-6 h-6 rounded-full border ${selectedColor === color ? "ring-2 ring-offset-2" : "ring-0"}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => setSelectedColor(color)}
                                ></button>
                            )
                        )}
                    </div>
                )}
            </div>

            {/* Size */}
            <div>
                <button
                    className="flex justify-between w-full text-left"
                    onClick={() => toggleDropdown("size")}
                >
                    <span className="font-medium">Size</span>
                    <span>{dropdowns.size ? <Image src='/svgs/dropdownicon.svg' alt="drop down icon" height={16} width={16} /> : <Image src='/svgs/dropdownicon.svg' alt="drop down icon" height={16} width={16} className="transform rotate-180" />}</span>
                </button>
                {dropdowns.size && (
                    <div className="flex flex-wrap gap-2 mt-4">
                        {["XX-Small", "X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large", "3X-Large", "4X-Large"].map(
                            (size) => (
                                <button
                                    key={size}
                                    className={`px-4 py-1 border rounded-full ${selectedSize === size ? "bg-black text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            )
                        )}
                    </div>
                )}
            </div>

            {/* Dress Style */}
            <div>
                <button
                    className="flex justify-between w-full text-left"
                    onClick={() => toggleDropdown("dressStyle")}
                >
                    <span className="font-medium">Dress Style</span>
                    <span>{dropdowns.dressStyle ? <Image src='/svgs/dropdownicon.svg' alt="drop down icon" height={16} width={16} /> : <Image src='/svgs/dropdownicon.svg' alt="drop down icon" height={16} width={16} className="transform rotate-180" />}</span>
                </button>
                {dropdowns.dressStyle && (
                    <div className="space-y-2 mt-4">
                        {["Casual", "Formal", "Party", "Gym"].map((style) => (
                            <button
                                key={style}
                                className="w-full text-left text-gray-700 hover:text-black"
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Apply Filter Button */}
            <div>
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800">
                    Apply Filter
                </button>
            </div>
        </div>
    );
}