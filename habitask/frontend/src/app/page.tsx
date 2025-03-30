"use client";
import React from "react";
import Image from "next/image";

export function Video() {
  return (
    <video width="320" height="240" controls preload="none">
      <source src="../public/gragas-falling" type="video/mp4" />
    
      Your browser does not support the video tag.
    </video>
  )
}

//TODO: MUDAR A IMAGEM E COLOCAR ESSA PRA HEADER
//TODO: CRIAR UMA IMAGEM NO LUGAR DESSA LOGO FEIA DO CARAI
const Home = () => {
  return (
    <div className="w-full h-screen flex items-center justify-start">
      {/* Container flex para alinhar imagem e texto lado a lado */}
      <div className="flex items-center justify-center max-w-full">
        
        {/* Imagem posicionada à esquerda */}
        <div className="flex-shrink-0">

        </div>
        {/* Texto alinhado à direita da imagem */}
        <div className="ml-8"> 
          <h1 className="text-3xl font-bold">
            <span>Start now, don't lose your time.</span>
            <br />
            <span className="text-purple-500">Organize</span> sua vida.
            <br />
            Alcance seus <span className="text-purple-500">objetivos</span>.
            <br />
            Menos caos, mais{" "}
            <span className="text-purple-500 font-black">conquistas</span>.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;