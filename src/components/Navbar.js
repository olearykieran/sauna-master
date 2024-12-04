// src/components/Navbar.js

"use client";

// src/components/Navbar.js

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10">
      <div className="mx-auto px-4 py-4 bg-black opacity-70 flex justify-between items-center">
        <div className="text-2xl font-bold">Kieran O'Leary - Sauna Master</div>
        <div className="space-x-4">
          <a href="#about" className="cursor-pointer">
            About
          </a>
          <a href="#services" className="cursor-pointer">
            Services
          </a>
          <a href="#gallery" className="cursor-pointer">
            Gallery
          </a>
          <a href="#contact" className="cursor-pointer">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
