import Image from "next/image";
import bg from "../../../public/background/Projects-background.png";
import Project from "../components/project/Project";
import { projectsData } from "../data";
import RenderModel from "../components/RenderModel";
import Staff from "../model/Staff";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col 
    items-center justify-between relative text-white"
    >
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-25"
      />
      <Project projects={projectsData} />
      <div className="flex items-center justify-center fixed top-0 -left-[650px] h-screen w-full">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </main>
  );
}
