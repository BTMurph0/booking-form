import { BookingSchema } from "@/schema";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type BookingState = Partial<BookingSchema> & {
  setData: (data: Partial<BookingSchema>) => void;
};

export const useBookingStore = create<BookingState>()(
  persist(
    (set) => ({
      setData: (data) => set(data),
    }),
    {
      name: "booking-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
