import { prisma } from "@/lib/prisma";


const ITEMS_PER_PAGE = 5;

export const getData = async (query: string, currentPage: number,kategori:string) => {
    const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
    try {
      // Fetch terminologies based on the conditions
      const data = await prisma.terminologi.findMany({
        skip: offset,
        take: ITEMS_PER_PAGE,
        where: {
          kategori: kategori, // Filter by kategori 'data'
          AND: [
            {
              OR: [
                {
                  nama: {
                    contains: query,
                    mode: "insensitive", // Case-insensitive search for 'nama'
                  },
                },
                {
                  arti: {
                    contains: query,
                    mode: "insensitive", // Case-insensitive search for 'arti'
                  },
                },
              ],
            },
          ],
        },
        distinct: ['nama'], // Add distinct on the 'nama' column

        orderBy: {
          createdAt: 'desc', // Optional: Order by creation date, adjust as needed
        },
      });
  
      return data;
    } catch (error) {
      console.error("Error fetching terminologi data:", error); // Log the error for debugging
      throw new Error("Failed to fetch terminologi data");
    }
  };

  export const getDataPages = async (query:string, kategori:string) => {
    try {
      // Build the 'where' clause based on the presence of a query
      const data = await prisma.terminologi.findMany({
        where: {
          kategori: kategori, // Filter by kategori 'data'
          AND: [
            {
              OR: [
                {
                  nama: {
                    contains: query,
                    mode: "insensitive", // Case-insensitive search for 'nama'
                  },
                },
                {
                  arti: {
                    contains: query,
                    mode: "insensitive", // Case-insensitive search for 'arti'
                  },
                },
              ],
            },
          ],
        },
       
        distinct: ['nama'], // Add distinct on the 'nama' column
        
      });
      const totalData = data.length;
      // Calculate the total pages required
      const totalPages = Math.ceil(totalData / ITEMS_PER_PAGE);
  
      return totalPages;
    } catch (error) {
      console.error("Error calculating total pages:", error);
      throw new Error("Failed to calculate total pages");
    }
  };
  


