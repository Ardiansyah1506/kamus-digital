// Import necessary libraries and components
import { getDataPatologi } from "@/lib/data"; // Ensure the correct path to your data fetching function
import { IoIosArrowRoundForward } from "react-icons/io"; // You don't need IoIosArrowRoundDown if it's unused
import Link from "next/link";
import parse from 'html-react-parser';

const ITEMS_PER_PAGE = 10; // Define your items per page
// Utility function to truncate text to a certain length


// Table Component
export const Table = async ({ query, currentPage }:{query:string,currentPage:number}) => {
  // Fetch data based on the query and the current page
  const data = await getDataPatologi(query, currentPage);
  // Utility function to truncate text to a certain length
const truncateText = ({text, maxLength}:{text:string,maxLength:number}) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };
  
// Function to handle HTML and truncate it
const truncateHtmlText = ({text, maxLength}:{text:string,maxLength:number}) => {
    const truncatedText = truncateText({ text: stripHtmlTags(text), maxLength });
    return parse(truncatedText); // Parse the truncated text to HTML elements
  };
  
  // Function to strip HTML tags from a string
  const stripHtmlTags = (text:string) => {
    return text.replace(/<\/?[^>]+(>|$)/g, ""); // Removes HTML tags using regex
  };
  
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex justify-between items-center w-1/2">
        <h3 className="text-white font-bold text-xl">Referensi</h3>
        <div className="flex gap-4 justify-center items-center">
          <p className="text-white">Semua</p>
          <div className="bg-white rounded-xl">
            <IoIosArrowRoundForward size={25} />
          </div>
        </div>
      </div>

      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-y-2 w-1/2">
          <h1 className="text-white font-medium text-xl">{item.nama}</h1>
          <small className="text-white">
          {truncateHtmlText({ text: item.deskripsi || "", maxLength: 400 })}
          </small>
          <div className="flex w-full justify-end">
            <Link
              href={`/patologi/${item.id}`} // Link to specific terminology item, adjust URL as needed
              className="inline-flex px-3 py-2 text-sm font-medium text-white focus:outline-none"
            >
              Lihat Referensi
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      ))}

    </div>
  );
};
