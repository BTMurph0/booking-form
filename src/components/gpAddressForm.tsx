"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { bookingSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/app/store";

const gpAddressSchema = bookingSchema.pick({
  gpName: true,
  email: true,
  contactNumber: true,
});

type GpAddressSchema = z.infer<typeof gpAddressSchema>;

export default function GpAddressForm() {
  const router = useRouter();

  const setData = useBookingStore((state) => state.setData);

  const { register, handleSubmit } = useForm<GpAddressSchema>({
    resolver: zodResolver(gpAddressSchema),
  });
  const onSubmit: SubmitHandler<GpAddressSchema> = (data) => {
    setData(data);
    console.log(data);
    router.push("/appointment-format");
  };
  return (
    <div className="pt-12 flex flex-col items-center gap-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-6 w-xl"
      >
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
        <div className="flex gap-4 justify-end">
          <button
            className="cursor-pointer rounded-lg p-4 bg-[#604BFF] text-white"
            type="submit"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
