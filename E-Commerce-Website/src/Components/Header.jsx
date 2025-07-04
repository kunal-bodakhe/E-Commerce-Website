import React from "react";
import useStore from "../Store.js";
import { useEffect } from "react";

import logo from "../assets/logo.png";
import SearchBlack from "../assets/Search-icon.svg";
import { X } from "lucide-react";
import AddProduct from "./AddProduct";

function Header() {
  const {
    openPopup,
    isPopupOpen,
    closePopup,
    filterByCategory,
    filteredProducts,
    category,
    categoryName,
    setCategoryName,
  } = useStore();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo/Brand Name */}
        <div className="flex items-center flex-shrink-0 mr-6 mb-4 md:mb-0">
          <img src={logo} className="h-[50px] w-auto object-contain" />
          <a
            href="#"
            className="font-bold text-2xl tracking-tight rounded-md p-2 hover:bg-blue-700 transition-colors text-black"
          >
            MyShOp
          </a>
        </div>

        <div className="flex justify-center flex-col md:flex-row items-stretch md:items-center w-full md:w-auto ml-auto mx-10">
          <button
            onClick={openPopup}
            className="px-6 py-2 mx-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200 ease-in-out"
          >
            Add New Product
          </button>

          {/* Popup / Modal Container */}
          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative transform transition-all scale-100 opacity-100">
                {/* Close Button */}
                <button
                  onClick={closePopup}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Close popup"
                >
                  <X size={24} />
                </button>
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
                  Add Product Form
                </h2>
                <AddProduct onClose={closePopup} />{" "}
                {/* Pass onClose to close form on submit */}
              </div>
            </div>
          )}

          {/* Category Dropdown */}
          <div className="relative mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
            <label htmlFor="category-select" className="sr-only">
              Select Category
            </label>

            <select
              id="category-select"
              className="w-full py-2 pl-3 pr-8 rounded-md bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-600 appearance-none cursor-pointer transition-all duration-200 ease-in-out"
              onChange={(e) => setCategoryName(e.target.value)}
            >
              <option value="all">All Categories</option>
              {category.map((i, index) => {
                return (
                  <option key={index} value={i}>
                    {i}
                  </option>
                );
              })}
              </select>

            {/* arrow for select box */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-200">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
            <form className="flex items-center w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-2 pr-4 rounded-md bg-blue-700 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-600 transition-all duration-200 ease-in-out"
                aria-label="Search input"
              />
              <button
                type="submit"
                className=" absolute right-0 top-0 bottom-0 px-1 py-2 bg-blue-500 hover:bg-blue-400 rounded-r-md text-white transition-colors"
                aria-label="Submit search"
              >
                <img className="w-5" src={SearchBlack}></img>
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
