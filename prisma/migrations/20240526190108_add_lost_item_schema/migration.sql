/*
  Warnings:

  - Added the required column `image` to the `foundItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foundItems" ADD COLUMN     "image" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "lostItems" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "brand" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "timeLost" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lostItems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lostItemsCategories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lostItemsCategories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "lostItems" ADD CONSTRAINT "lostItems_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "lostItemsCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lostItems" ADD CONSTRAINT "lostItems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
