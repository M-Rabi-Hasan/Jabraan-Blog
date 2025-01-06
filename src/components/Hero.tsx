import Image from "next/image";
import banner from "@/images/jibran-3.png";

const Hero = () => {
  return (
    <div className="w-full max-h-screen relative">
      <Image
        src={banner}
        alt="banner image"
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full bg-black/30 text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-7xl lg:text-[80px] font-bold">Pakistan's Leading</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
          Photographer
        </p>
      </div>
    </div>
  );
};

export default Hero;