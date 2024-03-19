import Image from "next/image";
import bg from "../../../../public/background/Projects-background.png";
import Project from "../../components/project/Project";
import { projectsData } from "../../data";

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full fixed top-0 left-0 object-cover object-center opacity-25"
      />
      <Project projects={projectsData} />
      <div className="flex items-center justify-center fixed top-0 -left-[650px] h-screen w-full"></div>
    </>
  );
}
