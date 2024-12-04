import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="hero" className="h-screen relative">
      <Image
        src="/hero-image.jpg"
        alt="Hero Image"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Elevate Your Sauna Experience</h1>
        <p className="text-2xl">Professional Sauna Master Services for Exclusive Homes</p>
      </div>
    </section>
  );
};

export default HeroSection;
