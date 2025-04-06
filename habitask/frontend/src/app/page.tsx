import React from "react";
import Image from "next/image";
import homeImg from "../public/homeImg.png";

const Home = () => {
  return (
    <div className="w-full h-screen flex lg:pl-[10rem] items-center justify-start">
      <div className="flex w-screen max-md:flex-col max-md:justify-between justify-center items-center max-w-full">
        <div className="">
          <Image src={homeImg} alt="Logo" width={400} height={120} />
        </div>

        <div className="ml-8 max-md:mt-5 p-4 max-md:justify-center bg-[#1c1c21ec] border-8 rounded-bl-4xl rounded-tr-4xl border-[#8614ff] md:pl-4 lg:pr-3">
          <h1 className="text-[3rem] font-bold">
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
