"use client";

import { useFormState } from "react-dom";
import { SubmitButton } from "@/components/Button";
import { TerminologiCreate } from "@/lib/Create";
const FormCreate = () => {
  const [state, formAction] = useFormState(TerminologiCreate, null);
  return (
    <div>
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
            placeholder="arti Istilah Medis"
          />

          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.arti}</p>
          </div>
        </div>
        <div className="mb-5">
          <label
            htmlFor="Kategori"
            className="block text-sm font-medium text-gray-900"
          >
            Kategori
          </label>
            
          <select name="kategori" id="kategori" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
            <option value="suffix">Suffix</option>
            <option value="preffix">Preffix</option>
            <option value="root">Root</option>
          </select>
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.arti}</p>
          </div>
        </div>
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.kategori}</p>
          </div>

        <div id="message-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.message}</p>
          </div>
        <SubmitButton label="save"/>
      </form>
    </div>
  );
};

export default FormCreate;
