"use client";

import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/Button";
import { useState, useEffect } from "react";
import { PatologiCreate } from "@/lib/Create";
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const FormCreate = () => {
  const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [deskripsi, setDeskripsi] = useState<string>(""); // State untuk deskripsi

  const [state, formAction] = useFormState(PatologiCreate, null);
  const handleDeskripsiBlur = (quill: any) => {
    setDeskripsi(quill.getHTML());
  };

  useEffect(() => {
    if (state?.message) {
      setSuccessMessage(state.message);
      const timer = setTimeout(() => setSuccessMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [state]);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Mencegah refresh halaman

    const formData = new FormData(event.currentTarget);
    formData.append("deskripsi", deskripsi); // Tambahkan deskripsi ke FormData

    formAction(formData); // Panggil formAction dengan formData yang diperbarui
  };


  // Handler untuk perubahan nilai deskripsi

  return (
    <div>
      {successMessage && (
        <div
          className="mt-4 text-sm text-green-600 bg-green-100 p-2 rounded-md"
          aria-live="polite"
        >
          {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="nama"
            className="block text-sm font-medium text-gray-900"
          >
            Istilah Medis
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Istilah Medis"
          />
          <div id="nama-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nama}</p>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="deskripsi"
            className="block text-sm font-medium text-gray-900"
          >
            Deskripsi
            <br />
            <small>Perhatikan Format Deskripsinya</small>
          </label>
          <ReactQuill
            value={deskripsi} // Ikat state deskripsi ke ReactQuill
            onBlur={(range, source, quill) => handleDeskripsiBlur(quill)} // Tangani kehilangan fokus
            className="h-40 mb-20"
          />
          <div id="deskripsi-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.deskripsi}</p>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="foto"
            className="block text-sm font-medium text-gray-900"
          >
            Nama Model 3D
          </label>
          <input
            type="text"
            name="foto"
            id="foto"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="nama file"
          />
          <div id="foto-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.foto}</p>
          </div>
        </div>

        <SubmitButton label="Save"/>
      </form>
    </div>
  );
};
export default FormCreate;
