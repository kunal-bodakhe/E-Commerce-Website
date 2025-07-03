import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useStore from "../Store.js";

function ApiComponent() {
  const { products, setProducts } = useStore();

  // Fetch function for React Query
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products/");
    if (!response.ok) {
      throw new Error("Could not fetch products");
    }
    const result = await response.json();
    console.log("Fetched from API:", result); // Debug
    return result;
  };

  // Use React Query
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  // Handle success - update Zustand store when data is available
  useEffect(() => {
    if (data) {
      console.log("Setting products to Zustand:", data); // Debug
      setProducts(data);
    }
  }, [data, setProducts]);

  // Handle error - log error when it occurs
  useEffect(() => {
    if (error) {
      console.error("Fetch failed:", error.message); // Debug
    }
  }, [error]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  return (
    <>
      <div>
        <h2>Your Products</h2>
        <ul>
          {products.map((item) => (
            <li key={item.id}>
              <h4>{item.title}</h4>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ApiComponent;
