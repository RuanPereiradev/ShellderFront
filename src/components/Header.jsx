import "boxicons/css/boxicons.min.css";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 relative z-50">
      {/* LOGO */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-widest">
        SHELLDER
      </h1>

      {/* NAV DESKTOP */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          href="#company"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          COMPANY
        </a>
        <a
          href="#features"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          FEATURES
        </a>
        <a
          href="#resources"
          className="text-base tracking-wider transition-colors hover:text-gray-300"
        >
          RESOURCES
        </a>

        <button
          className="bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none 
          font-medium transition-all duration-500 hover:bg-white cursor-pointer"
        >
          SIGN IN
        </button>
      </nav>

      {/* BOTÃO MOBILE */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-4xl p-2 z-50 focus:outline-none"
      >
        <i className={`bx ${isMenuOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>

      {/* MENU MOBILE */}
      <div
        id="mobileMenu"
        className={`fixed top-0 left-0 w-full h-full bg-black/80 backdrop-blur-md flex flex-col items-center justify-center gap-8 text-lg transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a
          href="#company"
          className="tracking-wider transition-colors hover:text-gray-300"
          onClick={toggleMobileMenu}
        >
          COMPANY
        </a>
        <a
          href="#features"
          className="tracking-wider transition-colors hover:text-gray-300"
          onClick={toggleMobileMenu}
        >
          FEATURES
        </a>
        <a
          href="#resources"
          className="tracking-wider transition-colors hover:text-gray-300"
          onClick={toggleMobileMenu}
        >
          RESOURCES
        </a>

        <button
          onClick={toggleMobileMenu}
          className="bg-[#a7a7a7] text-black py-3 px-8 rounded-full font-medium transition-all duration-500 hover:bg-white"
        >
          SIGN IN
        </button>
      </div>
    </header>
  );
};

export default Header;
