-- CreateEnum
CREATE TYPE "QuestCategory" AS ENUM ('LEARNING', 'FITNESS', 'SELFCARE', 'SOCIAL', 'FINANCE', 'CAREER', 'CREATIVITY', 'PRODUCTIVITY', 'MISCELLANEOUS');

-- CreateEnum
CREATE TYPE "QuestDifficulty" AS ENUM ('SIMPLE', 'EASY', 'MODERATE', 'HARD', 'INSANE');

-- CreateEnum
CREATE TYPE "QuestStatus" AS ENUM ('PENDING', 'COMPLETED');

-- CreateEnum
CREATE TYPE "QuestRepeat" AS ENUM ('NONE', 'DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateTable
CREATE TABLE "Quest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "category" "QuestCategory" NOT NULL DEFAULT 'MISCELLANEOUS',
    "difficulty" "QuestDifficulty" NOT NULL DEFAULT 'SIMPLE',
    "repeat" "QuestRepeat" NOT NULL DEFAULT 'NONE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" "QuestStatus" NOT NULL DEFAULT 'PENDING',
    "userId" TEXT,

    CONSTRAINT "Quest_pkey" PRIMARY KEY ("id")
);
