"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:wvent777@gmail.com">
          wvent777@gmail.com
        </a>{" "}
        or through this form.{" "}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        // can also rewrite it as just
        // action={sendEmail}
        action={async (formData) => {
          // don't want to access info on client
          // console.log("Running on Client");
          // console.log(formData.get("senderEmail"));
          // console.log(formData.get("message"));
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email Send Successfully!");
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80
          dark:focus:bg-opacity-100 transition-all ease-in-out duration-300 dark:outine-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80
          dark:focus:bg-opacity-100 transition-all ease-in-out duration-300 dark:outine-none"
          name="message"
          placeholder="Your Message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
