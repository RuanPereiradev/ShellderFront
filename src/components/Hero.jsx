import React from "react";
import Image3D from "./Image3D";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      {/* Texto */}
      <div className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        {/* Aviso de desenvolvimento */}
        <div className="mb-4 px-4 py-1 bg-yellow-400 text-black rounded-full w-fit text-sm font-medium">
          ⚠️ Site em desenvolvimento
        </div>

        <div
          className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#8b5cf6]
          shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full"
        >
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i className="bx bx-diamond mr-1"></i> Introducing
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
          PROFESSIONAL
          <br />
          SCHEDULER
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          Transforme sua rotina e maximize sua produtividade. Com nosso
          agendador profissional, você organiza compromissos, otimiza seu tempo
          e garante que nada fique perdido. Agendar nunca foi tão fácil e
          eficiente.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            className="border border-[#8b5cf6] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="#"
          >
            Documentation
            <i className="bx bx-link-external ml-1"></i>
          </a>
          <a
            className="border border-[#8b5cf6] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]
           bg-gray-300 text-black hover:text-white"
            href="#"
          >
            Get Started <i className="bx bx-link-external ml-1"></i>
          </a>
        </div>
      </div>

      {/* Imagem 3D */}
      <div className="relative flex justify-center items-center lg:w-1/2 mt-10 lg:mt-0">
        <div className="absolute w-[60%] h-[60%] rounded-full blur-3xl bg-purple-700/30 -z-10" />
        <Image3D src="/shelder.png" />
      </div>
    </main>
  );
};

export default Hero;
