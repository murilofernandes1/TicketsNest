-- DropForeignKey
ALTER TABLE `route` DROP FOREIGN KEY `Route_driverId_fkey`;

-- DropIndex
DROP INDEX `Route_driverId_fkey` ON `route`;

-- AlterTable
ALTER TABLE `route` MODIFY `driverId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Route` ADD CONSTRAINT `Route_driverId_fkey` FOREIGN KEY (`driverId`) REFERENCES `Driver`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
