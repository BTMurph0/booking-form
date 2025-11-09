"use client";

import { useFormContext } from "react-hook-form";
import type { BookingSchema } from "@/schema";

export default function AppointmentFormatForm() {
  const {
    register,
    formState: { errors },
  } = useFormContext<BookingSchema>();

  return (
    <div className="pt-24 flex flex-col items-center gap-8">
      <div className="flex flex-col gap-8 md:w-xl w-xs">
        <h2 className="md:text-2xl font-bold">
          Select your preferred appointment format
        </h2>

        <label
          className="p-6 border border-[#AEB0BD] rounded-xl cursor-pointer has-checked:border-[#7E6CD8]"
          htmlFor="video"
        >
          Video
          <input
            {...register("appointmentFormat")}
            className="appearance-none"
            type="radio"
            name="appointmentFormat"
            id="video"
            value="video"
          />
        </label>

        <label
          className="p-6 border border-[#AEB0BD] rounded-xl cursor-pointer has-checked:border-[#7E6CD8]"
          htmlFor="audio"
        >
          Audio
          <input
            {...register("appointmentFormat")}
            className="appearance-none"
            type="radio"
            name="appointmentFormat"
            id="audio"
            value="audio"
          />
        </label>
      </div>
      {errors.appointmentFormat && (
        <p className="text-red-500">{errors.appointmentFormat.message}</p>
      )}
    </div>
  );
}
