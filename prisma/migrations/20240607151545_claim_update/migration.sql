/*
  Warnings:

  - Added the required column `additionalPhoto` to the `claims` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactNo` to the `claims` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `claims` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proofOfOwnership` to the `claims` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "claims" ADD COLUMN     "additionalPhoto" TEXT NOT NULL,
ADD COLUMN     "contactNo" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "proofOfOwnership" TEXT NOT NULL;
