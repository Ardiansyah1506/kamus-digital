import Navbar from "@/components/Navbar";
import Image from "next/image";
import { PatologiButton, TerminologiButton } from "@/components/Button";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-hero h-screen">
      <Head>
        <title>Musterm</title>
      </Head>
      <Navbar />
      <div className="flex justify-center items-center h-3/4">
        <div className="flex flex-row-reverse justify-center items-center gap-36 h-1/2 ">
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={400}
            height={100}
            priority
          />
          <div className="flex flex-col gap-y-4 w-1/2">
            <div className="text-5xl text-white flex flex-col justify-start items-start font-bold">
              <p>
                <span className="text-primary-blue">Kamus</span> Digital
              </p>
              <p>Terminologi Medis</p>
              <p>Sistem Muskuloskeletal</p>
            </div>
            <small className="text-gray-400 w-3/4">
              Sistem muskuloskeletal adalah sistem tubuh yang terdiri dari otot,
              tulang, sendi dan jaringan penghubung lainnya. Sistem ini
              berfungsi untk mendukung dan melindungi pergerakan, serta menjaga
              postur dan keseimbangan.
            </small>
            <div className="flex gap-x-8 mt-4">
              <TerminologiButton/>
              <PatologiButton/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
