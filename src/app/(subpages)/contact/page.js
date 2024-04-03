import React from "react";
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import ContactForm from "@/app/components/contact/ContactForm";

const Contact = () => {
  return (
    <>
      <Image
        src={bg}
        alt="about-background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover 
        object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Meet Ermias.
          </h1>
          <p className="text-white font-light text-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic
            quasi tenetur est nostrum aspernatur cum? Impedit sequi ea, delectus
            doloribus molestiae recusandae voluptas eveniet? Rerum repudiandae
            voluptatibus neque deserunt.
          </p>
          <ContactForm />
        </div>
      </article>
    </>
  );
};

export default Contact;
