import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header";
import ProductCard from "./Components/ProductCard";
import AddProduct from "./Components/AddProduct";
// import X from "./assets/close-icon.png";

function App() {
  // const [count, setCount] = useState(0);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  console.log(isPopupOpen); // State to control popup visibility

  const openPopup = () => {
    setIsPopupOpen(true);
    console.log(isPopupOpen);
  };
  const closePopup = () => setIsPopupOpen(false);

  // {
  //   isPopupOpen && (
  //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
  //       <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative transform transition-all scale-100 opacity-100">
  //         {/* Close Button */}
  //         <button
  //           onClick={closePopup}
  //           className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
  //           aria-label="Close popup"
  //         >
  //           <X size={24} />
  //         </button>
  //         <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
  //           Add Product Form
  //         </h2>
  //         <AddProduct onClose={closePopup} />{" "}
  //         {/* Pass onClose to close form on submit */}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <Header openPopup={openPopup} closePopup={closePopup} isPopupOpen={isPopupOpen}/>
      <ProductCard />
    </>
  );
}

export default App;
