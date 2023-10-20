"use server";
import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import contactFormEmail from "@/email/contact-form-email";

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

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "wvent777@gmail.com",
      subject: "Message From Contact Form",
      reply_to: senderEmail as string,
      // text: message as string,
      react: React.createElement(contactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
