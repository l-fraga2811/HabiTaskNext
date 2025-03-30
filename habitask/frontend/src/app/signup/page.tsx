"use client";
import React from "react";
import Image from "next/image";


//TODO: MUDAR A IMAGEM E COLOCAR ESSA PRA HEADER
//TODO: CRIAR UMA IMAGEM NO LUGAR DESSA LOGO FEIA DO CARAI
const Signup = () => {
  return (
    <div className="w-full h-screen flex items-center justify-start">
      {/* Container flex para alinhar imagem e texto lado a lado */}
      <div className="flex items-center justify-start max-w-screen">
        
        {/* Imagem posicionada à esquerda */}
       

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

export default Signup;
