import Image from "next/image";
import React from "react";
import pjt from "@/public/assets/prjt.jpg";
import imreact from "@/public/assets/React.svg";
import imTailwind from "@/public/assets/Tailwindcss.svg";
import imTypescript from "@/public/assets/typescript.svg";

export const Connaissance = () => {
  return (
    <div className="w-full my-5 bg-fpblue bg-opacity-60   ">
      <div className="p-9">
        <h3 className="text-2xl font-extrabold">Projet en avant</h3>
        <p className="text-gray-200">
          un projet de validation de connaissance apres ma formation
        </p>
      </div>

      <div className="flex justify-center items-center flex-col md:flex-row">
        <Image src={pjt} alt="projet" className="p-10 md:w-3/6 shadow-2xl" />
        <div className="mx-6">
          <div className="flex justify-center pt-2 md:justify-start items-center">
            <Image src={imreact} alt="React" className="w-12 pr-2" />
            <Image src={imTailwind} alt="TailwindCss" className="w-12 pr-2 " />
            <Image src={imTypescript} alt="Typescript" className="w-12 pr-2" />
          </div>

          <div className=" flex  items-center flex-col mt-10">
            <div className="pb-10">
              <p className="text-2xl pb-3 "> Lorem Ipsum-Ipsum </p>
              <p className="font-sans">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>

            <button className="border-1 bg-fpblue text-md  mb-3 md:text-xl px-11 py-4 shadow-2xl rounded hover:bg-pblue hover:brightness-150 transition-all delay-150">
              <span className="pl-2 uppercase font-semibold">
                Consulter mes projets
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
