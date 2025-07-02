import { create } from "zustand";

const useStore = create((set) => ({
  isPopupOpen: false,
  showDescription: false,
  toggleDescription: () =>
    set((state) => ({ showDescription: !state.showDescription })),
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
