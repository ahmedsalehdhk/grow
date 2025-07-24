/*
  Warnings:

  - The values [NONE] on the enum `QuestRepeat` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "QuestRepeat_new" AS ENUM ('NEVER', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');
ALTER TABLE "Quest" ALTER COLUMN "repeat" DROP DEFAULT;
ALTER TABLE "Quest" ALTER COLUMN "repeat" TYPE "QuestRepeat_new" USING ("repeat"::text::"QuestRepeat_new");
ALTER TYPE "QuestRepeat" RENAME TO "QuestRepeat_old";
ALTER TYPE "QuestRepeat_new" RENAME TO "QuestRepeat";
DROP TYPE "QuestRepeat_old";
ALTER TABLE "Quest" ALTER COLUMN "repeat" SET DEFAULT 'NEVER';
COMMIT;

-- AlterTable
ALTER TABLE "Quest" ALTER COLUMN "repeat" SET DEFAULT 'NEVER';
