import { create } from "zustand";

// Zustand store for booking details

export const useBookingStore = create((set) => ({
  bookingDetails: {
    tour: "",
    price: "",
    name: "",
    date: "",
  },
  setBookingDetails: (bookingDetails) => set({ bookingDetails }),
}));
