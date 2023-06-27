/*
  Warnings:

  - You are about to drop the `_UserFeed` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_UserFeed` DROP FOREIGN KEY `_UserFeed_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserFeed` DROP FOREIGN KEY `_UserFeed_B_fkey`;

-- DropTable
DROP TABLE `_UserFeed`;

-- CreateTable
CREATE TABLE `_UserFeeds` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserFeeds_AB_unique`(`A`, `B`),
    INDEX `_UserFeeds_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_FeedAccess` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_FeedAccess_AB_unique`(`A`, `B`),
    INDEX `_FeedAccess_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserFeeds` ADD CONSTRAINT `_UserFeeds_A_fkey` FOREIGN KEY (`A`) REFERENCES `Feed`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserFeeds` ADD CONSTRAINT `_UserFeeds_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FeedAccess` ADD CONSTRAINT `_FeedAccess_A_fkey` FOREIGN KEY (`A`) REFERENCES `Feed`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_FeedAccess` ADD CONSTRAINT `_FeedAccess_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
