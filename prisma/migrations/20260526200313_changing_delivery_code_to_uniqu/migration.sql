/*
  Warnings:

  - A unique constraint covering the columns `[code]` on the table `Delivery` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Delivery_code_key` ON `Delivery`(`code`);
