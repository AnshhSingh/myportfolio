"use server";

import { z } from "zod";
import { Resend } from "resend";

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

// Handle form submission
export async function sendContactForm(data: FormData) {
  const parsedData = contactSchema.safeParse({
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  });

  if (!parsedData.success) {
    return { success: false, errors: parsedData.error.flatten().fieldErrors };
  }

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "anshsingh25bd@gmail.com",
      subject: `New Contact Message from ${parsedData.data.name}`,
      text: `Name: ${parsedData.data.name}\nEmail: ${parsedData.data.email}\nMessage: ${parsedData.data.message}`,
    });

    return { success: true };
  } catch (error) {
    return { success: false, message: `Failed to send email.Try again later.: ${error}` };
  }
}
