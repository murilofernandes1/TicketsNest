/*
  Warnings:

  - You are about to drop the column `driverId` on the `delivery` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `delivery` DROP FOREIGN KEY `Delivery_driverId_fkey`;

-- DropForeignKey
ALTER TABLE `delivery` DROP FOREIGN KEY `Delivery_routeId_fkey`;

-- DropIndex
DROP INDEX `Delivery_driverId_fkey` ON `delivery`;

-- DropIndex
DROP INDEX `Delivery_routeId_fkey` ON `delivery`;

-- AlterTable
ALTER TABLE `delivery` DROP COLUMN `driverId`,
    MODIFY `routeId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `route` MODIFY `status` VARCHAR(191) NOT NULL DEFAULT 'OPEN';

-- AddForeignKey
ALTER TABLE `Delivery` ADD CONSTRAINT `Delivery_routeId_fkey` FOREIGN KEY (`routeId`) REFERENCES `Route`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
