import Image from "next/image";
import bg from "../../../../public/background/about-background.png";

const Home = () => {
  return (
    <>
      <Image
        src={bg}
        alt="about-background"
        className="-z-50 fixed to0` left-0 w-full h-full object-cover object-center opacity-25"
      />
    </>
  );
};

export default Home;
