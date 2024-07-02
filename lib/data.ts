import { prisma } from "@/lib/prisma";


const ITEMS_PER_PAGE = 5;

export const getDataTerminologi = async (query: string, currentPage: number,kategori:string) => {
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
  

    export const getDataPatologi = async (query: string, currentPage: number) => {
    
      try {
        // Fetch terminologies based on the conditions
        const data = await prisma.patologi.findMany({
          where: {
            OR: [
              {
                nama: {
                  contains: query,
                  mode: "insensitive", // Case-insensitive search for 'nama'
                },
              },
              {
                foto: {
                  contains: query,
                  mode: "insensitive", // Case-insensitive search for 'arti'
                },
              },
              {
                deskripsi: {
                  contains: query,
                  mode: "insensitive", // Case-insensitive search for 'arti'
                },
              },
            ],
          },
          orderBy: {
            createdAt: 'desc', // Optional: Order by creation date, adjust as needed
          },
        });
      
      return data;
      } catch (error) {
        console.error('Error fetching terminologies:', error);
      }
      
    };
    export const getDataPatologiById = async (id: string) => {
      try {
        // Fetch the single patologi item based on its ID
        const patologi = await prisma.patologi.findUnique({
          where: { id: id }, // Match the item by its unique ID
        });
    
        // Return the found patologi item or null if not found
        return patologi;
      } catch (error) {
        console.error('Error fetching patologi by ID:', error);
        return null;
      }
    };
