import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import useStore from "../Store.js";

function ApiComponent() {
  const { setCategory, setCategorisedProducts, categoryName } = useStore();

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


  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: productCategory } = useQuery({
    queryKey: ["productsByCategory", categoryName],
    queryFn: () => fetchProductViaCategory(categoryName),
    enabled: !!categoryName, // only run when categoryName is set
  });


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


  if (isLoading) return <div>Loading The data Please Wait...</div>;
  if (isError) return <div>Error loading products</div>;

  return <></>;
}

export default ApiComponent;
