import { create } from "zustand";

const useStore = create((set) => ({
  isPopupOpen: false,
  openPopup: () => set((state) => ({ isPopupOpen: true })),
  closePopup: () => set((state) => ({ isPopupOpen: false })),
}));

export default useStore;
