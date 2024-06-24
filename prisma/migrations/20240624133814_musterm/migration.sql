-- CreateTable
CREATE TABLE "Patologi" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Patologi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Terminologi" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "arti" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Terminologi_pkey" PRIMARY KEY ("id")
);
