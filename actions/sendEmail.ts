"use server";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  // Log output to see if working
  // console.log("Running on server");
  // console.log(formData.get("senderEmail"));
  // console.log(formData.get("message"));

  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // Simple Server Side Validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid Sender Email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid Message",
    };
  }

  // Since Checked Validations
  // Can assert as string

  try {
    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "wvent777@gmail.com",
      subject: "Message From Contact Form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    } else if (error && typeof error === "object" && "message" in error) {
      return {
        error: error.message,
      };
    }
  }
};
