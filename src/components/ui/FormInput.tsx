"use client";

import { useFormContext, Path } from "react-hook-form";
import type { BookingSchema } from "@/schema";

interface FormInputProps {
  name: Path<BookingSchema>;
  label: string;
  placeholder?: string;
  type?: string;
}

export function FormInput({
  name,
  label,
  placeholder,
  type = "text",
}: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<BookingSchema>();

  return (
    <div className="flex flex-col border-1 rounded-md p-4 focus-within:ring-2 focus-within:ring-indigo-500">
      <label>{label}</label>
      <input {...register(name)} placeholder={placeholder} type={type} />
      {errors[name] && <p className="text-red-500">{errors[name]?.message}</p>}
    </div>
  );
}
