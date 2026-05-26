/*
  Warnings:

  - You are about to drop the column `notes` on the `delivery` table. All the data in the column will be lost.
  - Added the required column `code` to the `Delivery` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `delivery` DROP COLUMN `notes`,
    ADD COLUMN `code` INTEGER NOT NULL;
