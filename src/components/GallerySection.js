// src/components/GallerySection.js

import Image from "next/image";

const GallerySection = () => {
  return (
    <section id="gallery" className="py-20 px-4 animate-fade-in">
      <h2 className="text-4xl font-bold text-center mb-10">Gallery</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative w-full h-64">
          <Image
            src="/photo1.jpg"
            alt="Session Photo 1"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/photo2.jpg"
            alt="Session Photo 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/photo3.jpg"
            alt="Session Photo 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/photo4.jpg"
            alt="Session Photo 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/photo5.jpg"
            alt="Session Photo 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative w-full h-64">
          <Image
            src="/photo6.jpg"
            alt="Session Photo 2"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/* Add more images */}
      </div>
    </section>
  );
};

export default GallerySection;
