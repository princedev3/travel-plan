import { create } from "zustand";
type ModalType = "sidebarToggle" | "ticketDialog";
type cartStoreType = {
  type?: ModalType | null;
  open: boolean;
  setOpen: (open: boolean, type?: ModalType | null) => void;
};
export const useCartStore = create<cartStoreType>((set) => ({
  open: false,
  setOpen: (open, type) => set(() => ({ open, type })),
}));
