import React from "react";
import { useState } from "react";

import imageUrl from "../assets/Headphones.png"


function ProductCard() {
  // Placeholder data for the product
  const product = {
    name: "Premium Wireless Headphones",
    description: "Experience immersive sound with these comfortable, noise-cancelling wireless headphones. Perfect for music lovers and professionals alike. Featuring crystal-clear audio, ergonomic design, and long-lasting battery life for all-day enjoyment.",
    price: "$199.99",
    imageUrl: imageUrl, // Updated placeholder for square
    imageAlt: "Premium Wireless Headphones",
  };

  // State to manage the visibility of the description
  const [showDescription, setShowDescription] = useState(false);

  // Function to toggle description visibility
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden my-6">
      {/* Product Image Section - Enforces a square aspect ratio */}
      <div className="relative w-full pt-[52%] cursor-pointer" onClick={toggleDescription}> {/* Added onClick and cursor-pointer */}
        <img
          className="absolute inset-0 h-100 w-100 object-cover rounded-t-xl"
          src={product.imageUrl}
          alt={product.imageAlt}
        />
        {/* Overlay to indicate clickability (optional, but good UX) */}
        <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <span className="text-white text-lg font-semibold">Click for Details</span>
        </div>
      </div>
      {/* Product Details Section */}
      <div className="p-8 flex flex-col justify-between">
        <div>
          {/* Category */}
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Electronics
          </div>
          {/* Product Name */}
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {product.name}
          </a>
          {/* Product Description - Conditionally rendered */}
          {showDescription && (
            <p className="mt-2 text-gray-500 transition-all duration-300 ease-in-out animate-fade-in">
              {product.description}
            </p>
          )}
        </div>
        {/* Price and Add to Cart Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">
            {product.price}
          </span>
          <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

