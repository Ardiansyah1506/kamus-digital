import Link from "next/link";

export const TerminologiButton = () => {
  return (
    <Link
      href="/terminologi"
      className="relative md:w-[150px] inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
    >
      <span className="w-full relative text-center px-5 py-2.5 transition-all ease-in duration-75  bg-btn-blue rounded-md group-hover:bg-opacity-0">
        Terminologi
      </span>
    </Link>
  );
};

export const PatologiButton = () => {
  return (
    <Link
      href="/patologi"
      className="relative md:w-[150px]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
    >
      <span className="w-full relative px-5 py-2.5 text-center  transition-all ease-in duration-75  bg-hero rounded-md group-hover:bg-opacity-0">
        Patologi
      </span>
    </Link>
  );
};
