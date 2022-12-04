/*
  Warnings:

  - A unique constraint covering the columns `[id,name]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `creatorName` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_createdBy_fkey";

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "creatorName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_id_name_key" ON "User"("id", "name");

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_createdBy_creatorName_fkey" FOREIGN KEY ("createdBy", "creatorName") REFERENCES "User"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
