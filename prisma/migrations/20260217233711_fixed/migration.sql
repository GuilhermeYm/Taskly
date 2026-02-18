/*
  Warnings:

  - The values [PENDENTE,EM_ANDAMENTO,CONCLUIDO] on the enum `TaskStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TaskStatus_new" AS ENUM ('PENDANT', 'IN_PROGRESS', 'COMPLETED');
ALTER TABLE "public"."Task" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Task" ALTER COLUMN "status" TYPE "TaskStatus_new" USING ("status"::text::"TaskStatus_new");
ALTER TYPE "TaskStatus" RENAME TO "TaskStatus_old";
ALTER TYPE "TaskStatus_new" RENAME TO "TaskStatus";
DROP TYPE "public"."TaskStatus_old";
ALTER TABLE "Task" ALTER COLUMN "status" SET DEFAULT 'PENDANT';
COMMIT;

-- AlterTable
ALTER TABLE "Task" ALTER COLUMN "project" SET DEFAULT 'Does not belong to any project',
ALTER COLUMN "status" SET DEFAULT 'PENDANT';
