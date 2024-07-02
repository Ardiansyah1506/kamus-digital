// app/patologi/[id]/page.tsx

import { getDataPatologiById } from '@/lib/data';
import Navbar from '@/components/Navbar';
import Detail from '@/components/patologi/detail';
import { PrismaClient } from '@prisma/client/extension';

type PatologiPageProps = {
  params: {
    id: string;
  };
};

// Mengambil data berdasarkan ID dari parameter URL
const PatologiPage = async ({ params }: PatologiPageProps) => {
  const { id } = params;
  const patologi = await getDataPatologiById(id);

  if (!patologi) {
    return (
      <div className="min-h-screen bg-hero flex flex-col items-center justify-center">
        <h1 className="text-white text-3xl">Patologi tidak ditemukan</h1>
        <a href="/" className="text-white mt-4">Kembali ke halaman utama</a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-hero">
      <Navbar />
      <div className="flex flex-col pb-5 gap-4 md:gap-y-12 justify-center items-center md:mt-12">
        <Detail patologi={patologi} />
      </div>
    </div>
  );
};



export default PatologiPage;
