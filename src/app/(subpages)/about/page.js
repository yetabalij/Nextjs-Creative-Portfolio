import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import AboutDetails from "@/app/components/about";

const Home = () => {
  return (
    <>
      <Image
        src={bg}
        alt="about-background"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover 
        object-center opacity-25"
      />

      <div className="flex flex-col items-center text-center">
        <h1 className="font-bold text-9xl text-accent">Hello All,</h1>
        <p className="text-white">Meet the person behind this portfolio.</p>
      </div>
      <AboutDetails />
    </>
  );
};

export default Home;
