/*
  Warnings:

  - You are about to drop the column `foundItemId` on the `claims` table. All the data in the column will be lost.
  - You are about to drop the `foundItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `foundItemsCategories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lostItems` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lostItemsCategories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `itemId` to the `claims` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CATEGORY" AS ENUM ('LOST_ITEM', 'FOUND_ITEM');

-- DropForeignKey
ALTER TABLE "claims" DROP CONSTRAINT "claims_foundItemId_fkey";

-- DropForeignKey
ALTER TABLE "foundItems" DROP CONSTRAINT "foundItems_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "foundItems" DROP CONSTRAINT "foundItems_userId_fkey";

-- DropForeignKey
ALTER TABLE "lostItems" DROP CONSTRAINT "lostItems_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "lostItems" DROP CONSTRAINT "lostItems_userId_fkey";

-- AlterTable
ALTER TABLE "claims" DROP COLUMN "foundItemId",
ADD COLUMN     "itemId" TEXT NOT NULL;

-- DropTable
DROP TABLE "foundItems";

-- DropTable
DROP TABLE "foundItemsCategories";

-- DropTable
DROP TABLE "lostItems";

-- DropTable
DROP TABLE "lostItemsCategories";

-- CreateTable
CREATE TABLE "items" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "itemName" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "description" TEXT,
    "location" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "brand" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "primaryColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,
    "type" "CATEGORY" NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "items" ADD CONSTRAINT "items_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "claims" ADD CONSTRAINT "claims_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
