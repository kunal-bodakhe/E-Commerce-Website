import React from "react";

import SearchBlue from '../assets/Search-icon.png';
import SearchBlack from "../assets/Search-icon.svg"

function Header() {

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        {/* Logo/Brand Name */}
        <div className="flex items-center flex-shrink-0 mr-6 mb-4 md:mb-0">
          <a href="#" className="font-bold text-2xl tracking-tight rounded-md p-2 hover:bg-blue-700 transition-colors">
            MyShOp
          </a>
        </div>

        
        <div className="flex justify-center flex-col md:flex-row items-stretch md:items-center w-full md:w-auto ml-auto">
          {/* Category Dropdown */}
          <div className="relative mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
            <label htmlFor="category-select" className="sr-only">Select Category</label>
            <select
              id="category-select"
              className="w-full py-2 pl-3 pr-8 rounded-md bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-blue-600 appearance-none cursor-pointer transition-all duration-200 ease-in-out"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="clothing">Clothing</option>
              <option value="home-garden">Home & Garden</option>
              <option value="sports">Sports</option>
            </select>

            {/* arrow for select box */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-200">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
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
