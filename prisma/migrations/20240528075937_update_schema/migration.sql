/*
  Warnings:

  - You are about to drop the column `foundItemName` on the `foundItems` table. All the data in the column will be lost.
  - Added the required column `brand` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemName` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primaryColor` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `secondaryColor` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timeFound` to the `foundItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `lostItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `lostItems` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "foundItems" DROP COLUMN "foundItemName",
ADD COLUMN     "brand" TEXT NOT NULL,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "itemName" TEXT NOT NULL,
ADD COLUMN     "primaryColor" TEXT NOT NULL,
ADD COLUMN     "secondaryColor" TEXT NOT NULL,
ADD COLUMN     "timeFound" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "lostItems" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL;
