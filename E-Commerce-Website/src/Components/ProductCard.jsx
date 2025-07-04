import React from "react";
import { useState } from "react";
import useStore from "../Store.js";

import imageUrl from "../assets/Headphones.png";

function ProductCard() {
  const {
    toggleDescription,
    showDescriptionId,
    categorisedProducts,
    products,
    categoryName,
  } = useStore();
  // Placeholder data for the product
  // const product = {
  // name: "Premium Wireless Headphones",
  // description:
  //   "Experience immersive sound with these comfortable, noise-cancelling wireless headphones. Perfect for music lovers and professionals alike. Featuring crystal-clear audio, ergonomic design, and long-lasting battery life for all-day enjoyment.",
  // price: "$199.99",
  // imageUrl: imageUrl, // Updated placeholder for square
  // imageAlt: "Premium Wireless Headphones",
  // rating: 4.5,
  // };

  // State to manage the visibility of the description
  //   const [showDescription, setShowDescription] = useState(false);

  //   // Function to toggle description visibility
  //   const toggleDescription = () => {
  //     setShowDescription(!showDescription);
  //   };

  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8">
      {/* <h2 className="text-2xl font-bold mb-6">Products</h2> */}

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categoryName !== "all" && categorisedProducts.length > 0
          ? categorisedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Product Image */}
                <div
                  className="cursor-pointer flex justify-center bg-white-100 p-4"
                  onClick={() => toggleDescription(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[250px] w-auto object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {product.category}
                    </div>
                    <h3 className="mt-1 text-lg font-medium text-black">
                      {product.title}
                    </h3>

                    {/* Conditional Description */}
                    {showDescriptionId === product.id && (
                      <p className="mt-2 text-gray-500 transition-all duration-300">
                        {product.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-2 text-sm text-gray-600">
                    Rating:{" "}
                    <span className="font-bold text-yellow-500">
                      {product.rating.rate}
                    </span>{" "}
                    / 5 <br />
                    Rated By:{" "}
                    <span className="font-bold text-yellow-500">
                      {product.rating.count}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          : products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Product Image */}
                <div
                  className="cursor-pointer flex justify-center bg-white-100 p-4"
                  onClick={() => toggleDescription(product.id)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-[250px] w-auto object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      {product.category}
                    </div>
                    <h3 className="mt-1 text-lg font-medium text-black">
                      {product.title}
                    </h3>

                    {/* Conditional Description */}
                    {showDescriptionId === product.id && (
                      <p className="mt-2 text-gray-500 transition-all duration-300">
                        {product.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-2 text-sm text-gray-600">
                    Rating:{" "}
                    <span className="font-bold text-yellow-500">
                      {product.rating.rate}
                    </span>{" "}
                    / 5 <br />
                    Rated By:{" "}
                    <span className="font-bold text-yellow-500">
                      {product.rating.count}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default ProductCard;
