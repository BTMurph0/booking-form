"use client";

import { useFormContext } from "react-hook-form";

import { z } from "zod";
import { bookingSchema } from "@/schema";

const gpAddressSchema = bookingSchema.pick({
  gpName: true,
  email: true,
  contactNumber: true,
});

type GpAddressSchema = z.infer<typeof gpAddressSchema>;

export default function GpAddressForm() {
  const { register } = useFormContext<GpAddressSchema>();

  return (
    <div className="pt-12 flex flex-col items-center gap-8">
      <h2 className="text-2xl font-bold">
        Please confirm or add to the below GP Contact Details.
      </h2>
      <div className="flex flex-col border-1 rounded-md p-4">
        <label>GP Name</label>
        <input {...register("gpName")} placeholder="GP Name" />
      </div>
      <div className="flex flex-col border-1 rounded-md p-4">
        <label>Email</label>
        <input {...register("email")} placeholder="Email" />
      </div>
      <div className="flex flex-col border-1 rounded-md p-4">
        <label>Contact Number</label>
        <input {...register("contactNumber")} placeholder="Contact number" />
      </div>
    </div>
  );
}
