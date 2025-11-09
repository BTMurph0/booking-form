"use client";

import SuccessLogo from "@/components/ui/icons/Frame 1430102066.svg";
import Image from "next/image";

export default function Confirmation() {
  return (
    <>
      <div className="py-12 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center md:gap-8 gap-4 md:w-xl w-xs">
          <Image className="" src={SuccessLogo} alt="" />
          <h2 className="md:text-2xl text-lg font-bold">Booking Confirmed!</h2>
          <div className="max-w-xl flex flex-col gap-4 text-center md:text-lg text-sm">
            <p>
              You should soon receive an email confirming your booking, followed
              by a reminder email the day before your appointment to your
              registered email address.
            </p>
            <p>
              To attend or cancel your session, go to the booking area by
              clicking the calendar icon in the top navigation
            </p>
          </div>
          <div className="max-w-xl flex flex-col p-6 rounded-2xl gap-4 bg-[#FFEF99] md:text-lg text-sm">
            <p className="text-[#594B00] text-base font-bold">Important Note</p>
            <p>
              For both audio appointments and video appointments, you will need
              to return to the portal to join your session at the scheduled
              time.
            </p>
            <p>
              Clinicians do not call users directly. Ensure you log in a few
              minutes before your appointment to avoid missing your session.
            </p>
          </div>
          <button className="md:w-xl w-xs p-6 rounded-2xl text-white text-base font-bold bg-[#604BFF]">
            Return to Home
          </button>
        </div>
      </div>
    </>
  );
}
