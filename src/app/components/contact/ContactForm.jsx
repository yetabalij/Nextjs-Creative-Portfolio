"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [emailSuccess, setEmailSuccess] = useState("");

  const onSubmit = (data) => {
    emailjs
      .send(
        "service_nueqcbc",
        "template_8298sam",
        {
          name: data.Name,
          email: data.Email,
          message: data.Message,
        },
        {
          publicKey: "7yVan15b1BCo2_UNw",
        }
      )
      .then(
        (result) => {
          setEmailSuccess(result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4 max-w-md w-full 
        items-center justify-center"
      >
        {emailSuccess == "OK" && (
          <span className="text-green-500">Success Sending your message.</span>
        )}
        <input
          type="text"
          placeholder="Name"
          {...register("Name", { required: true })}
          className="w-full p-2 rounded-md shadow-lg text-white 
          focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Name && (
          <span className="text-red-500">This field is required.</span>
        )}
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          className="w-full p-2 rounded-md shadow-lg text-white 
          focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Email && (
          <span className="text-red-500">This field is required.</span>
        )}
        <textarea
          {...register("Message", { required: true, max: 998, min: 50 })}
          className="w-full p-2 rounded-md shadow-lg text-white 
          focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.Message && (
          <span className="text-red-500">This field is required.</span>
        )}

        <input
          type="submit"
          value="Send Your Message"
          className="text-accent px-10 py-4 rounded-md shadow-lg 
          bg-background border border-accent/30 border-solid 
          hover:shadow-glass-sm backdrop-blur-sm text-white 
          focus:outline-none focus:ring-2 focus:ring-accent/50 
          cursor-pointer capitalize"
        />
      </form>
    </div>
  );
};

export default ContactForm;
