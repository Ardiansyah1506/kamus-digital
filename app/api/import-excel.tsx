// pages/api/import-excel.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import formidable, { File } from 'formidable';
import { promises as fs } from 'fs';
import path from 'path';
import xlsx from 'xlsx';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

const readExcel = async (filePath: string) => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  return xlsx.utils.sheet_to_json(worksheet);
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), 'uploads');
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ message: 'Error parsing the file' });
        return;
      }

      const filePath = (files.file as File).filepath;
      const excelData = await readExcel(filePath);

      try {
        for (const row of excelData) {
          await prisma.terminologi.create({
            data: {
              nama: row.nama as string,
              arti: row.arti as string,
              kategori: row.kategori as string,
            },
          });
        }
        res.status(200).json({ message: 'Data imported successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error importing data' });
      } finally {
        // Hapus file yang diunggah setelah selesai
        await fs.unlink(filePath);
      }
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default handler;
