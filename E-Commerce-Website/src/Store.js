import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  filteredProducts: [],
  setProducts: (products) => set({ products, filteredProducts: products }), // set both initially

  filterByCategory: (category) =>
    set((state) => ({
      filteredProducts:
        category === "all"
          ? state.products
          : state.products.filter((p) => p.category === category),
    })),
  isPopupOpen: false,
  showDescriptionId: null,
  toggleDescription: (key) =>
    set((state) => ({
      showDescriptionId: state.showDescriptionId === key ? null : key,
    })),
  openPopup: () => set((state) => ({ isPopupOpen: true })),
  closePopup: () => set((state) => ({ isPopupOpen: false })),
}));

// const useQueryAndStore = () => {
//   const setUsers = useUserStore((s) => s.setUsers)

//   return useQuery(['users'], fetchUsers, {
//     onSuccess: (data) => {
//       setUsers(data)
//     },
//   })
// }

export default useStore;
