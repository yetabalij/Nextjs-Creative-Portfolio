import Image from "next/image";
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
        <div className="col-span-4 !p-0 custom-bg">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=yetabalij&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="git"
            loading="lazy"
          />
        </div>
        <div className="col-span-8 !p-0 custom-bg">
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=yetabalij&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="git"
            loading="lazy"
          />
        </div>
        <div className="custom-bg col-span-full px-12 py-6">
          <img
            className="w-full h-auto"
            src="https://skillicons.dev/icons?i=js,react,nextjs,redux,nodejs,express,ts,npm,mongodb,html,css,tailwind,styledcomponents,mysql,postgres,bootstrap,figma,xd,postman,ps,c,cpp,git,github,gitlab,heroku,netlify,linux,materialui,wordpress"
            alt="git"
            loading="lazy"
          />
        </div>
        <div className="custom-bg col-span-6 !p-0">
          <img
            src="https://github-readme-streak-stats.herokuapp.com?user=yetabalij&theme=dark&hide_border=true&type=png&background=FF5B5B00&ring=FEFE5B&currStreakLabel=FEFE5B"
            alt="GitHub Streak"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
