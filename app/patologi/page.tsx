import Navbar from "@/components/Navbar";
import Search from "@/components/Search";
import { Table } from "@/components/patologi/table";
import { getDataPages } from "@/lib/data";
import { IoIosArrowRoundForward } from "react-icons/io";


const page = async ({searchParams}: {searchParams?:{
    query?:string;
    page?:string;
  }}) => {

    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;
  
  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      <div className="flex flex-col mt-5 gap-4 md:gap-y-12 justify-center items-center md:mt-12">
        <h1 className="font-bold text-white text-3xl text-center w-1/2">
          Kamus Patologi Medis Sistem Muskuloskeletal
        </h1>
        <Search />
  
         <Table query={query} currentPage={currentPage}/>
      </div>
    </div>
  );
};

export default page;
