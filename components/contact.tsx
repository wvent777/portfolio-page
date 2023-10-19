"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-5">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:wvent777@gmail.com">
          wvent777@gmail.com
        </a>{" "}
        or through this form.{" "}
      </p>

      <form
        className="mt-10 flex flex-col"
        // can also rewrite it as just
        // action={sendEmail}
        action={async (formData) => {
          // don't want to access info on client
          // console.log("Running on Client");
          // console.log(formData.get("senderEmail"));
          // console.log(formData.get("message"));
          await sendEmail(formData);
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 
          h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full
        outline-none transition-all active:scale-105 focus:scale-110 hover:scale-110 hover:bg-gray-950"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
          group-hover:translate-x-1 group-hover:-translate-y-1"
          />{" "}
        </button>
      </form>
    </motion.section>
  );
}
