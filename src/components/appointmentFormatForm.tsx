"use client";

import { bookingSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { useBookingStore } from "@/app/store";

const appointmentFormatSchema = bookingSchema.pick({
  appointmentFormat: true,
});

type AppointmentFormatSchema = z.infer<typeof appointmentFormatSchema>;

export default function AppointmentFormatForm() {
  const router = useRouter();

  const gpName = useBookingStore((state) => state.gpName);
  const email = useBookingStore((state) => state.email);
  const contactNumber = useBookingStore((state) => state.contactNumber);

  const setData = useBookingStore((state) => state.setData);

  const { register, handleSubmit } = useForm<AppointmentFormatSchema>({
    resolver: zodResolver(appointmentFormatSchema),
  });
  const onSubmit: SubmitHandler<AppointmentFormatSchema> = (data) => {
    setData(data);
    console.log({ ...data, gpName, email, contactNumber });
    router.push("/confirmation");
  };

  const handlePrevious = () => {
    router.push("/");
  };

  return (
    <div className="pt-12 flex flex-col items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-xl"
      >
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

        <div className="flex gap-4 justify-end">
          <button
            type="button"
            onClick={handlePrevious}
            className="cursor-pointer border rounded-lg border-[#604BFF] p-4 bg-white text-[#604BFF]"
          >
            Previous
          </button>
          <button
            type="submit"
            className="cursor-pointer rounded-lg p-4 bg-[#604BFF] text-white"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
