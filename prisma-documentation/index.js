import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    include: {
      posts: {
        include: {
          categories: true,
        },
      },
    },
    data: {
      email: "philosopher@gmail.com",
      name: "Sphere-ous Orb User",
      posts: {
        create: [
          {
            title: "The Hedonistic King",
            categories: {
              connectOrCreate: [
                {
                  create: { name: "Penguins" },
                  where: {
                    name: "Penguins",
                  },
                },
                {
                  create: { name: "Romaine Kings" },
                  where: {
                    name: "Romaine Kings",
                  },
                },
              ],
            },
          },
          {
            title: "My Philosophy (NEW!)",
            categories: {
              connectOrCreate: [
                {
                  create: { name: "Penguins" },
                  where: {
                    name: "Penguins",
                  },
                },
                {
                  create: { name: "Philosophy" },
                  where: {
                    name: "Philosophy",
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main();
