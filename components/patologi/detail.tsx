// components/patologi/Detail.tsx

import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
import Models from "./models";

type DetailProps = {
  patologi: {
    id: string;
    nama: string;
    deskripsi: string;
    foto: string;
  }
};

const Detail = ({ patologi }: DetailProps) => {
  return (
    <div className="flex flex-col gap-5 w-full justify-center items-center">
        <h1 className="text-white font-medium text-xl">{patologi.nama}</h1>
      <div className="flex flex-col gap-y-2 w-1/2">
        <Models name={patologi.foto}/>
        <small className="text-white">
          {/* Render deskripsi sebagai HTML */}
          <div dangerouslySetInnerHTML={{ __html: patologi.deskripsi }} />
        </small>
      </div>
    </div>
  );
};

export default Detail;
