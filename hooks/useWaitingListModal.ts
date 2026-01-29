import { create } from "zustand";

interface WaitingListModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useWaitingListModal = create<WaitingListModalState>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
