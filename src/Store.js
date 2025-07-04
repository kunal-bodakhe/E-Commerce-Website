import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  category: [],
  categoryName: [],
  categorisedProducts: [],
  searchText: [],
  originalProducts: [],

  setProducts: (products) => set({ products, originalProducts: products }),

  searchProducts: (searchText) =>
    set((state) => ({
      products: state.originalProducts.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      ),
    })),

  setCategory: (category) => set({ category }), // set both initially

  setCategoryName: (categoryName) => set({ categoryName }),

  setCategorisedProducts: (categorisedProducts) => set({ categorisedProducts }),

  setsearchText: (searchText) => set({ searchText }),

  isPopupOpen: false,
  showDescriptionId: null,
  toggleDescription: (key) =>
    set((state) => ({
      showDescriptionId: state.showDescriptionId === key ? null : key,
    })),
  openPopup: () => set((state) => ({ isPopupOpen: true })),
  closePopup: () => set((state) => ({ isPopupOpen: false })),
}));

export default useStore;
