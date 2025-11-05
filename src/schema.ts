import z, { email } from "zod";

export const bookingSchema = z.object({
    gpName: z.string().min(1, "GP Name is required"),
    email: email("Invalid email address"),
    contactNumber: z.string().min(1, "Contact Number is required"),
    appointmentFormat: z.enum(["video", "audio"]),
});

export type BookingSchema = z.infer<typeof bookingSchema>;