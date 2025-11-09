import { z } from "zod";

export const bookingSchema = z.object({
  gpName: z.string().min(1, { message: "GP Name is required" }),
  email: z.email({ message: "Invalid email address" }),
  contactNumber: z.string().min(1, { message: "Contact Number is required" }),
  appointmentFormat: z.enum(["video", "audio"], {
    message: "Appointment format is required",
  }),
});

export const gpAddressSchema = bookingSchema.pick({
  gpName: true,
  email: true,
  contactNumber: true,
});

export const appointmentFormatSchema = bookingSchema.pick({
  appointmentFormat: true,
});

export type BookingSchema = z.infer<typeof bookingSchema>;
