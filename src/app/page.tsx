"use client";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { bookingSchema, type BookingSchema } from "@/schema";
import GpAddressForm from "@/components/GpAddressForm";
import AppointmentFormatForm from "@/components/AppointmentFormatForm";
import Confirmation from "@/components/Confirmation";
import ProgressBar from "@/components/ui/ProgressBar";

const steps = [<GpAddressForm />, <AppointmentFormatForm />, <Confirmation />];

export default function Home() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState<Partial<BookingSchema>>({});

  const methods = useForm<BookingSchema>({
    resolver: zodResolver(bookingSchema),
    mode: "onSubmit",
    defaultValues: {
      gpName: "",
      email: "",
      contactNumber: "",
      appointmentFormat: undefined,
    },
  });

  const handleNext = async () => {
    let stepFields: (keyof BookingSchema)[] = [];
    if (step === 0) stepFields = ["gpName", "email", "contactNumber"];
    if (step === 1) stepFields = ["appointmentFormat"];

    const valid = await methods.trigger(stepFields);
    if (!valid) return;

    const updatedData = { ...formData, ...methods.getValues() };
    setFormData(updatedData);

    if (step < steps.length - 1) {
      setStep(step + 1);
      console.log("Step data:", updatedData);
    } else {
      console.log("Final data:", updatedData);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-3xl px-4">
          <ProgressBar step={step} totalSteps={steps.length} />
        </div>
        <FormProvider {...methods}>
          <form className="flex flex-col gap-6">
            {steps[step]}
            {step < steps.length - 1 && (
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="cursor-pointer border rounded-lg border-[#604BFF] p-4 bg-white text-[#604BFF]"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="cursor-pointer rounded-lg p-4 bg-[#604BFF] text-white"
                >
                  Continue
                </button>
              </div>
            )}
          </form>
        </FormProvider>
      </div>
    </>
  );
}
