import { create } from "zustand";

const useStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  isPopupOpen: false,
  showDescriptionId: null,
  toggleDescription: (key) => set((state) => ({
    showDescriptionId: state.showDescriptionId === key ? null : key
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
