import React from "react";
import { useState , useEffect} from "react";
import useStore from "../Store.js";
import { useQuery } from "@tanstack/react-query";


import imageUrl from "../assets/Headphones.png";

function ProductCard() {
  const {
    toggleDescription,
    showDescriptionId,
    categorisedProducts,
    products,
    setProducts,
    categoryName,
  } = useStore();

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    if (!response.ok) {
      throw new Error("Could not fetch products");
    }
    const result = await response.json();
    return result;
  };

  const {
    data: allProducts,
    isLoading,   
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  useEffect(() => {
    if (allProducts) {
      setProducts(allProducts);
    }
  }, [allProducts, setProducts]);

    useEffect(() => {
    if (error) {
      console.error("Fetch failed:", error.message); // Debug
    }
  }, [error]);

  if (isLoading) return <div>Loading The data Please Wait...</div>;
  if (isError) return <div>Error loading products</div>;

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
                      <>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          {product.category}
                        </div>
                        <p className="mt-2 text-gray-500 transition-all duration-300">
                          {product.description}
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
                        </p>
                      </>
                    )}
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
                    <h3 className="mt-1 text-lg font-medium text-black">
                      {product.title}
                    </h3>

                    {/* Conditional Description */}
                    {showDescriptionId === product.id && (
                      <>
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                          {product.category}
                        </div>
                        <p className="mt-2 text-gray-500 transition-all duration-300">
                          {product.description}
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
                        </p>
                      </>
                    )}
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
