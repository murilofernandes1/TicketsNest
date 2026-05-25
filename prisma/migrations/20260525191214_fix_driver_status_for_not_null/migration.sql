/*
  Warnings:

  - Made the column `status` on table `driver` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `driver` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'ACTIVE';
