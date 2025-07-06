import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";
import AddProduct from "./Components/AddProduct";
import ApiComponent from "./Components/ApiComponent";
// import X from "./assets/close-icon.png";

function App() {

  return (
    <>
      <ApiComponent/>
      <Header/>
      <ProductCard />
    </>
  );
}

export default App;
