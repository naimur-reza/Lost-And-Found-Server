-- AlterTable
ALTER TABLE "foundItems" ADD COLUMN     "isClaimed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "lostItems" ADD COLUMN     "isFound" BOOLEAN NOT NULL DEFAULT false;
