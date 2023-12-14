/*
  Warnings:

  - You are about to drop the column `commentId` on the `image` table. All the data in the column will be lost.
  - Added the required column `imageId` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `image` DROP FOREIGN KEY `Image_commentId_fkey`;

-- AlterTable
ALTER TABLE `comment` ADD COLUMN `imageId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `image` DROP COLUMN `commentId`;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_imageId_fkey` FOREIGN KEY (`imageId`) REFERENCES `Image`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
