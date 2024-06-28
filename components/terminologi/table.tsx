import {getData, getDataPages } from "@/lib/data";
import { IoIosArrowRoundDown } from "react-icons/io"
import Pagination from "../pagination";


export const Table = async ({query,currentPage,kategori}:{query:string,currentPage:number,kategori:string}) => {
    const data = await getData(query,currentPage,kategori);
    const totalPages =await getDataPages(query,kategori)

    return (
      <div className="w-full flex flex-col gap-3 justify-center items-center overflow-x-auto">
        <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className="border-b border-gray-500">
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <IoIosArrowRoundDown size={20} />
                  <p>No</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <IoIosArrowRoundDown size={20} />
                  <p>Istilah Medis</p>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  <IoIosArrowRoundDown size={20} />
                  <p>Arti</p>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((datas, index) => (
              <tr key={datas.id} className="border-b capitalize border-gray-500 text-white">
                <td className="px-6 py-2">{index + 1}</td>
                <td className="px-6 py-2">{datas.nama}</td>
                <td className="px-6 py-2">{datas.arti}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination totalPages={totalPages}/>
      </div>
    );
}
