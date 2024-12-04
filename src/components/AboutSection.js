// src/components/AboutSection.js
"use client";

import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 px-4  text-white animate-fade-in font-cutive-mono"
    >
      <h2 className="text-4xl font-bold text-center mb-12">What is an Aufguss?</h2>
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-8">
        {/* Text Content */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <p className="text-lg leading-relaxed">
            The Aufguss ceremony is a traditional sauna ritual originating from Europe. It
            involves a sauna master pouring water mixed with essential oils over heated
            stones, creating a burst of steam and aroma. The sauna master then uses towels
            to circulate the hot air and fragrances throughout the room, enhancing the
            sensory experience. This practice intensifies the heat and provides
            therapeutic benefits through aromatherapy, promoting relaxation,
            detoxification, and overall well-being.
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-block bg-gold text-white py-3 px-6 rounded-full shadow-lg hover:bg-gold-dark transition duration-300"
            >
              Book an Aufguss Experience
            </a>
          </div>
        </div>
        {/* Video */}
        <div className="w-full lg:w-1/2">
          <div
            className="relative"
            style={{ paddingBottom: "56.25%" /* 16:9 aspect ratio */ }}
          >
            <video
              src="/video1.mov"
              controls
              className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
