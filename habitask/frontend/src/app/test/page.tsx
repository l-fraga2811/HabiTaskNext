import React from "react";
import Image from "next/image";
import homeImg from "../../public/homeImg.png";
import ProductPresentation from "../../components/ProductPresentation/ProductPresentation";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Home = () => {
  const words = (
    <h1>
      Start <span className="text-[purple-text]">now</span>, don't lose your
      time
    </h1>
  );
  return (
    <BackgroundBeamsWithCollision>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="flex w-screen max-md:flex-col max-md:justify-between justify-center items-center max-w-full">
          <TextGenerateEffect
            words="Start now, don't lose your time.
                    Organize sua vida.
                    Alcance seus objetivos.
                    Menos caos, mais conquistas."
            duration={1.5}
            className=" max-md:text-xl px-8 text-center md:ml-[10rem] max-w-[40rem] md:pr-[5rem] "
          />
          {/* div da direita */}
          <div className="md:ml-8 max-md:mt-5 p-4 max-md:justify-center md:pl-4 lg:pr-3">
            <ProductPresentation />
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
};
export default Home;
