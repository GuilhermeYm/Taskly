/*
  Warnings:

  - You are about to drop the column `projects` on the `Task` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "projects",
ADD COLUMN     "project" TEXT NOT NULL DEFAULT 'Não pertence a nenhum projeto';
