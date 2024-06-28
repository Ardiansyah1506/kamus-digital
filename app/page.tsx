import Navbar from "@/components/Navbar";
import Image from "next/image";
import { PatologiButton, TerminologiButton } from "@/components/Button";
import Head from "next/head";
import Model from "@/components/models";

export default function Home() {
  return (
    <div className="bg-hero min-h-screen">
      <Navbar />
      <div className="flex justify-center items-center md:py-0 py-2 h-full">
        <div className="flex md:flex-row-reverse flex-col pt-14  items-center w-full mx-10 gap-5 h-full">
        <div className="flex justify-center items-center h-3/4 w-full">
        {/* This div ensures the Model component is centered within this area */}
        <div className="w-full h-full items-center">
          <Model />
        </div>
      </div>
          <div className="flex flex-col gap-y-4 h-full justify-center">
          <h1 className="text-3xl font-extrabold leading-none md:text-4xl xl:text-5xl dark:text-white"><span className="text-primary-blue">Kamus</span>  Digital <br /> Terminologi Medis <br /> Sistem Muskoloskeletal</h1>

            <p className="font-light max-w-6xl text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                Sistem muskuloskeletal adalah sistem tubuh yang terdiri dari otot,
              tulang, sendi dan jaringan penghubung lainnya. Sistem ini
              berfungsi untk mendukung dan melindungi pergerakan, serta menjaga
              postur dan keseimbangan.
                </p>
            <div className="flex justify gap-x-12 mt-4">
              <TerminologiButton />
              <PatologiButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
