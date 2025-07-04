import React from "react";
import useStore from "../Store.js";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import X from '../assets/close-icon.png';

import { useForm } from "react-hook-form";

function AddProduct() {
  const { closePopup , setProducts ,products } = useStore();
  const onClose = closePopup;
  const productSchema = z
    .object({
      title: z.string().min(1, "Product name is required"),
      description: z.string().min(1, "Description is required"),
      price: z.coerce.number().min(0.01, "Price must be greater than 0"), // Use coerce.number for number inputs
      rate: z.coerce
        .number()
        .min(1, "Rating must be at least 1")
        .max(5, "Rating cannot exceed 5"), // Use coerce.number
      category: z.string().min(1, "Please select a category"),
      imageUrl: z
        .string()
        .url("Must be a valid image URL")
        .optional()
        .or(z.literal("")),
      imageFile: z.any().optional(), // react-hook-form returns FileList
    })
    .refine((data) => data.imageFile?.[0] || data.imageUrl, {
      message: "Either an image file or a valid URL is required",
      path: ["imageFile"],
    });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema), // Integrate Zod schema here
  });

  const onSubmit = (data) => {
    let finalImage = "";

    if (data.imageFile?.[0]) {
      // Create local preview URL OR send to backend/file server
      finalImage = URL.createObjectURL(data.imageFile[0]);
    } else if (data.imageUrl) {
      finalImage = data.imageUrl;
    }

    const newProduct = {
    title: data.title,
    description: data.description,
    price: data.price,
    category: data.category,
    image: finalImage,
    rating: {
      rate: data.rating,
      count: 0,
    },
    id: Date.now(), // optional unique id
  };

  setProducts([...products, newProduct]); // ✅ push to global array

  console.log("Added:", newProduct);
  onClose();
};
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Product Name Input */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name Of Product
        </label>
        <input
          type="text"
          placeholder="Name Of Product"
          id="title"
          {...register("title")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
        />
        {errors.title && (
          <p className="mt-1 text-sm text-red-600">{errors.title.message}</p>
        )}
      </div>

      {/* Product Description Input */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Description Of Product
        </label>
        <textarea
          placeholder="Description Of Product"
          id="description"
          {...register("description")}
          rows="3"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm resize-y text-black"
        ></textarea>
        {errors.description && (
          <p className="mt-1 text-sm text-red-600">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Price Input */}
      <div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Price Of Product
        </label>
        <input
          type="number"
          placeholder="Price Of Product"
          id="price"
          {...register("price")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
        />
        {errors.price && (
          <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
        )}
      </div>

      {/* Rating Input */}
      <div>
        <label
          htmlFor="rate"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Rating Of Product
        </label>
        <input
          type="number"
          placeholder="Rating Of Product"
          id="rate"
          step="any"
          {...register("rate")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
        />
        {errors.rate && (
          <p className="mt-1 text-sm text-red-600">{errors.rate.message}</p>
        )}
      </div>

      {/* Category Dropdown */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Category
        </label>
        <select
          id="category"
          {...register("category")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
        >
          <option value="">-- Select a Category --</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option value="women's clothing">Womens Clothing</option>
          <option value="men's clothing">Mens Clothing</option>
        </select>
        {errors.category && (
          <p className="mt-1 text-sm text-red-600">{errors.category.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Image{" "}
          <span className="text-gray-500">(or enter URL below)</span>
        </label>

        {/* File Upload */}
        <input
          type="file"
          accept="image/*"
          {...register("imageFile")}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />

        {/* URL Input */}
        <input
          type="url"
          placeholder="https://example.com/image.jpg"
          {...register("imageUrl")}
          className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-black"
        />

        {/* Optional error messages */}
        {(errors.imageFile || errors.imageUrl) && (
          <p className="mt-1 text-sm text-red-600">
            {errors.imageFile?.message || errors.imageUrl?.message}
          </p>
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
