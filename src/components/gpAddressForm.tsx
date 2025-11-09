"use client";

import { useFormContext } from "react-hook-form";
import type { BookingSchema } from "@/schema";

export default function GpAddressForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<BookingSchema>();

  return (
    <div className="pt-24 flex flex-col items-center gap-8">
      <div className="flex flex-col gap-8 md:w-xl w-xs">
        <h2 className="md:text-2xl font-bold">
          Please confirm or add to the below GP Contact Details.
        </h2>
        <div className="flex flex-col border-1 rounded-md p-4">
          <label>GP Name</label>
          <input {...register("gpName")} placeholder="GP Name" />
          {errors.gpName && (
            <p className="text-red-500">{errors.gpName.message}</p>
          )}
        </div>
        <div className="flex flex-col border-1 rounded-md p-4">
          <label>Email</label>
          <input {...register("email")} placeholder="Email" />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col border-1 rounded-md p-4">
          <label>Contact Number</label>
          <input {...register("contactNumber")} placeholder="Contact number" />
          {errors.contactNumber && (
            <p className="text-red-500">{errors.contactNumber.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
