/*
  Warnings:

  - Added the required column `status` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('InProgress', 'Closed');

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "status" "Status" NOT NULL;
