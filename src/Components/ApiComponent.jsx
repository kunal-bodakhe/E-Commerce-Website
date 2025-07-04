import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useStore from "../Store.js";

function ApiComponent() {
  const { setProducts, setCategory, setCategorisedProducts, categoryName } =
    useStore();

  // Fetch function for React Query
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    if (!response.ok) {
      throw new Error("Could not fetch products");
    }
    const result = await response.json();
    return result;
  };

  const fetchCategories = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    if (!response.ok) {
      throw new Error("Could not fetch products");
    }
    const categoryrResult = await response.json();
    return categoryrResult;
  };

  const fetchProductViaCategory = async () => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    if (!response.ok) {
      throw new Error("Could not fetch products");
    }
    const result = await response.json();
    return result;
  };

  // Use React Query
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: productCategory } = useQuery({
    queryKey: ["productsByCategory", categoryName],
    queryFn: () => fetchProductViaCategory(categoryName),
    enabled: !!categoryName, // only run when categoryName is set
  });

  // Handle success - update Zustand store when data is available
  useEffect(() => {
    if (products) {
      setProducts(products);
    }
  }, [products, setProducts]);

  useEffect(() => {
    if (categories) {
      setCategory(categories);
    }
  }, [categories, setCategory]);

  useEffect(() => {
    if (productCategory) {
      setCategorisedProducts(productCategory);
    }
  }, [productCategory, setCategorisedProducts]);

  // Handle error - log error when it occurs
  useEffect(() => {
    if (error) {
      console.error("Fetch failed:", error.message); // Debug
    }
  }, [error]);

  if (isLoading) return <div>Loading The data Please Wait...</div>;
  if (isError) return <div>Error loading products</div>;

  return <></>;
}

export default ApiComponent;
