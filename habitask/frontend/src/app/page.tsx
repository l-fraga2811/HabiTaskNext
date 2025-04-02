import React from "react";
import Image from "next/image";
import { purpleText } from "./layout";
import Link from "next/link";
import homeImg from "../public/homeImg.png";


//TODO: MUDAR A IMAGEM E COLOCAR ESSA PRA HEADER
//TODO: CRIAR UMA IMAGEM NO LUGAR DESSA LOGO FEIA DO CARAI
const Home = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      {/* Container flex para alinhar imagem e texto lado a lado */}
      <div className="flex items-center justify-center max-w-screen max-sm:flex-col">
        {/* DUAS IMAGENS, UMA PRA MOBILE E OUTRA PRA DESKTOP PQ N SEI COMO FAZER COM UMA SO SE VIRA AI */}
        <Link href="/" className="max-sm:hidden">
            <Image src={homeImg} alt="Logo" width={300} height={300} />
        </Link>

        {/* MOBILE */}
        <Link href="/" className="sm:hidden">
            <Image src={homeImg} alt="Logo" width={200} height={200} />
        </Link>

        <div className="ml-8">
          <h1 className=" max-md:pt-[5rem] max-md:text-2xl sm:text-5xl font-bold">
            <span>Start now, don't lose your time.</span>
            <br />
            <span className={purpleText}>Organize</span> sua vida.
            <br />
            Alcance seus <span className={purpleText}>objetivos</span>.
            <br />
            Menos caos, mais{" "}
            <span className={purpleText + " font-black"}>conquistas</span>.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;