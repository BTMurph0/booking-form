"use client";

import AppointmentFormatForm from "@/components/appointmentFormatForm";
import Confirmation from "@/components/confirmation";
import GpAddressForm from "@/components/gpAddressForm";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";

const steps = [<GpAddressForm />, <AppointmentFormatForm />, <Confirmation />];

export default function Home() {
  const methods = useForm();
  const [step, setStep] = useState(0);
  const onSubmit = (data: any) => {
    setStep(step + 1);
    console.log(data);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const { register, reset } = methods;
  return (
    <>
      <div className="flex flex-col items-center">
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-xl"
          >
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
                  type="submit"
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
