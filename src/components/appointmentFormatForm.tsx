"use client";

import { bookingSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, useFormContext } from "react-hook-form";
import { z } from "zod";

const appointmentFormatSchema = bookingSchema.pick({
  appointmentFormat: true,
});

type AppointmentFormatSchema = z.infer<typeof appointmentFormatSchema>;

export default function AppointmentFormatForm() {
  const { register } = useFormContext<AppointmentFormatSchema>();

  return (
    <div className="pt-12 flex flex-col items-center">
      <h2 className="text-2xl font-bold">
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
  );
}
