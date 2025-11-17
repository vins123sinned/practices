/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Made the column `authorId` on table `Post` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `email` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "comments" JSONB,
ADD COLUMN     "likes" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "views" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "authorId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "coinflips" BOOLEAN[],
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT,
ADD COLUMN     "profileViews" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "ExtendedProfile" (
    "id" SERIAL NOT NULL,
    "biography" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "ExtendedProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoryToPost" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CategoryToPost_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "ExtendedProfile_userId_key" ON "ExtendedProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE INDEX "_CategoryToPost_B_index" ON "_CategoryToPost"("B");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "ExtendedProfile" ADD CONSTRAINT "ExtendedProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToPost" ADD CONSTRAINT "_CategoryToPost_B_fkey" FOREIGN KEY ("B") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;
