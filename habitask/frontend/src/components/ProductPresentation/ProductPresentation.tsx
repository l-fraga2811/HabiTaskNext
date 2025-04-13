"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";
import logoBig from "../../public/homeImg.png";

export default function ProductPresentation() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] bg-[#ffffffae] max-w-sm p-4 sm:p-10">
        <Image
          src={logoBig}
          alt="product image"
          height="400"
          width="400"
          className="object-contain"
        />
        <div className=" bg-[#ffffffbe] rounded-[22px] p-3 mt-9">
          {/* TITLE */}
          <p className="text-base sm:text-xl text-black mb-2 dark:text-neutral-200">
            Air Jordan 4 Retro Reimagined
          </p>

          {/* DESCRIPTION */}
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem provident, ut maxime delectus numquam quia veniam sint, aliquid, saepe porro iste hic! Praesentium ad impedit dicta! Labore laudantium odit voluptate.
          </p>
        </div>

        {/* BUTTON */}
        <button className="rounded-full pl-4 pr-5 py-3 text-white flex justify-self-center items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full    px-2 py-0 text-white">
            $100
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
