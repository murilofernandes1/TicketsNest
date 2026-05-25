/*
  Warnings:

  - Made the column `licensePlate` on table `driver` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `driver` MODIFY `licensePlate` VARCHAR(191) NOT NULL;
