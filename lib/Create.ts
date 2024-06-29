"use server";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";


const terminologiSchema = z.object({
    nama: z.string().min(1),
    arti: z.string().min(1),
    kategori: z.string().min(1),
  });
export const TerminologiCreate = async (prevState: any, formData: FormData) => {
    const validatedFields = terminologiSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }
  
  
    try {
      await prisma.terminologi.create({
        data: {
          nama: validatedFields.data.nama,
          arti: validatedFields.data.arti,
          kategori: validatedFields.data.kategori,
        },
      });
      return {
        message: "Data berhasil ditambahkan!",
      };
    } catch (error) {
        console.error("Database error:", error);
      return {
        message: "Gagal Untuk menambahkan Data" };
    }
  
    // revalidatePath("/create");
    // redirect("/create");
    
  };
const PatologiSchema = z.object({
    nama: z.string().min(1),
    deskripsi: z.string().min(1),
    foto: z.string().min(1),
  });
  export const PatologiCreate = async (prevState: any, formData: FormData) => {
    // Assuming PatologiSchema is defined and imported for validation
    const validatedFields = PatologiSchema.safeParse(
      Object.fromEntries(formData.entries())
    );
  
    if (!validatedFields.success) {
      return {
        Error: validatedFields.error.flatten().fieldErrors,
      };
    }
  
    try {
      await prisma.patologi.create({
        data: {
          nama: validatedFields.data.nama,
          deskripsi: validatedFields.data.deskripsi,
          foto: validatedFields.data.foto,
        },
      });
      console.log(validatedFields.data)
  
      return {
        message: "Data berhasil ditambahkan!",
      };
    } catch (error) {
      console.error("Database error:", error);
      return {
        message: "Gagal untuk menambahkan data",
      };
    }
  };