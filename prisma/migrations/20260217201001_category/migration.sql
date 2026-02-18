-- CreateEnum
CREATE TYPE "Category" AS ENUM ('INBOX', 'TODAY', 'UPCOMING');

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "category" "Category" NOT NULL DEFAULT 'INBOX';
