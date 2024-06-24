import Link from "next/link";
export const Card = ({ label }: { label: string }) => {
  const Label =
    label === "root" ? "root" : label === "prefix" ? "prefix" : "suffix";
  const LabelContent =
    label === "root"
      ? "Istilah medis untuk menentukan subjek istilah"
      : label === "prefix"
      ? "Awalan dari suatu istilah yang merubah akar"
      : "Akhiran dari suatu istilah yang merubah akar";

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow bg-gradient-dark dark:border-gray-700">
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 capitalize text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {Label}
          </h5>
        </a>
        <p className="mb-3 md:w-3/4 font-normal text-gray-700 dark:text-gray-400">
          {LabelContent}
        </p>

        <div className="flex w-full justify-end">
        <Link
          href={`/terminologi/${Label}`}
          className="inline-flex px-3 py-2 text-sm font-medium  text-white focus:outline-none"
        >
          Lihat
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>

        </div>
      </div>
    </div>
  );
};
