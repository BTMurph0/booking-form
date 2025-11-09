"use client";

import { FormInput } from "./ui/FormInput";
import type { BookingSchema } from "@/schema";

const gpFields: {
  name: keyof BookingSchema;
  label: string;
  placeholder: string;
  type?: string;
}[] = [
  { name: "gpName", label: "GP Name", placeholder: "GP Name" },
  { name: "email", label: "Email", placeholder: "Email", type: "email" },
  {
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "Contact number",
  },
];

export default function GpAddressForm() {
  return (
    <div className="pt-24 flex flex-col items-center gap-8">
      <div className="flex flex-col gap-8 md:w-xl w-xs">
        <h2 className="md:text-2xl font-bold">
          Please confirm or add to the below GP Contact Details.
        </h2>

        {gpFields.map((field) => (
          <FormInput
            key={field.name}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            type={field.type}
          />
        ))}
      </div>
    </div>
  );
}
