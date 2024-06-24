import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { TableSuffix } from "@/components/terminologi/table";
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
const page = () => {
  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      <div className="flex flex-col mt-5 gap-4 md:gap-y-12 justify-center items-center md:mt-12">
        <h1 className="font-bold text-white text-3xl text-center w-1/2">
          Kamus Terminologi Medis Sistem Muskuloskeletal
        </h1>
        <Search />
        <div className="flex flex-col w-full justify-center items-center">
          <div className="flex justify-between items-center w-1/2">
            <h3 className="text-white font-bold text-xl">Suffix</h3>
            <div className="flex gap-4 justify-center items-center">
              <p className="text-white">Semua</p>
              <div className="bg-white rounded-xl">
                <IoIosArrowRoundForward size={25} />
              </div>
            </div>
          </div>
         <TableSuffix/>
        </div>
      </div>
    </div>
  );
};

export default page;
