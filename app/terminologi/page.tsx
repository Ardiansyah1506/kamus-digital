import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { Card } from "@/components/terminologi/card";
const page = () => {
  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      <div className="flex flex-col mt-5 gap-4 md:gap-y-12 justify-center items-center md:mt-20">
        <h1 className="font-bold text-white text-5xl text-center w-1/2">
          Kamus Terminologi Medis Sistem Muskuloskeletal
        </h1>
        <div className="flex md:flex-row flex-col gap-4">
          <Card label="root"/>
          <Card label="suffix" />
          <Card label="prefix" />
        </div>
      </div>
    </div>
  );
};

export default page;
