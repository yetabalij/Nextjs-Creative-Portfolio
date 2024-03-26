import React from "react";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-8 w-full">
        <div
          className="text-white col-span-8 row-span-2 custom-bg p-8 
        rounded-xl flex flex-col items-center justify-center space-y-4"
        >
          <h2 className="text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic
            quasi tenetur est nostrum aspernatur cum? Impedit sequi ea, delectus
            doloribus molestiae recusandae voluptas eveniet? Rerum repudiandae
            voluptatibus neque deserunt?
          </p>
        </div>
        <div
          className="text-accent col-span-4 custom-bg p-8 rounded-xl 
        flex items-center justify-center font-semibold text-3xl"
        >
          25+ <sub className="font-semibold text-base"> Clients</sub>
        </div>
        <div
          className="text-accent col-span-4 custom-bg p-8 rounded-xl 
        flex items-center justify-center font-semibold text-3xl"
        >
          4+ <sub className="font-semibold text-base"> Years of experience</sub>
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
