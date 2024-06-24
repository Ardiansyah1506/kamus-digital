"use client";

import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/Button";
import { TerminologiCreate } from "@/lib/Create";
import { useState, useEffect } from "react";

const FormCreate = () => {
  // Pastikan `successMessage` dapat menjadi string atau null
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // `state` menerima data dari formAction
  const [state, formAction] = useFormState(TerminologiCreate, null);

  useEffect(() => {
    if (state?.message) {
      // Set successMessage ketika form berhasil submit
      setSuccessMessage(state.message);
      
      // Clear successMessage setelah 5 detik (opsional)
      const timer = setTimeout(() => setSuccessMessage(null), 3000);
      
      // Cleanup timer ketika komponen di-unmount atau state berubah
      return () => clearTimeout(timer);
    }
  }, [state]);

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

    
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="nama"
            className="block text-sm font-medium text-gray-900"
          >
            Nama
          </label>
          <input
            type="text"
            name="nama"
            id="nama"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Istilah Medis"
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.nama}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="arti"
            className="block text-sm font-medium text-gray-900"
          >
            Arti
          </label>
          <input
            type="text"
            name="arti"
            id="arti"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Arti Istilah Medis"
          />
          <div id="arti-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.arti}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="kategori"
            className="block text-sm font-medium text-gray-900"
          >
            Kategori
          </label>
          <select
            name="kategori"
            id="kategori"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="suffix">Suffix</option>
            <option value="prefix">Prefix</option>
            <option value="root">Root</option>
          </select>
          <div id="kategori-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.kategori}</p>
          </div>
        </div>
        
        <SubmitButton label="Save" />

      </form>
    </div>
  );
};

export default FormCreate;
