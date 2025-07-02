import React from "react";
import useStore from "../Store.js"
// import X from '../assets/close-icon.png';

import { useForm } from "react-hook-form";

function AddProduct() {
    const {onClose}=useStore();
    
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Product Data:", data);
    // In a real application, you would send this data to a backend
    console.log("Product added successfully!");
    onClose(); // Close the popup after successful submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Product Name Input */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Name Of Product</label>
        <input
          type="text"
          placeholder="Name Of Product"
          id="title"
          {...register("title", { required: "Product name is required" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      {/* Product Description Input */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description Of Product</label>
        <textarea
          placeholder="Description Of Product"
          id="description"
          {...register("description", { required: "Description is required" })}
          rows="3"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-y"
        ></textarea>
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
        )}
      </div>

      {/* Price Input */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">Price Of Product</label>
        <input
          type="number"
          placeholder="Price Of Product"
          id="price"
          {...register("price", {
            required: "Price is required",
            min: { value: 0.01, message: "Price must be greater than 0" },
            valueAsNumber: true // Ensures the value is a number
          })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.price && (
          <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>

      {/* Rating Input */}
      <div>
        <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">Rating Of Product</label>
        <input
          type="number"
          placeholder="Rating Of Product"
          id="rating"
          {...register("rating", {
            required: "Rating is required",
            min: { value: 1, message: "Rating must be at least 1" },
            max: { value: 5, message: "Rating cannot exceed 5" },
            valueAsNumber: true // Ensures the value is a number
          })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        {errors.rating && (
          <p className="mt-1 text-sm text-red-600">{errors.rating.message}</p>
        )}
      </div>

      {/* Category Dropdown */}
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
        <select
          id="category"
          {...register("category", { required: "Please select a category" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">-- Select a Category --</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="women's clothing">Womens Clothing</option>
          <option value="men's clothing">Mens Clothing</option>
          <option value="others">Others</option>
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 ease-in-out mt-6"
      >
        Submit
      </button>
    </form>
  );
}

export default AddProduct;
