import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      email: "vinsinius@gmail.com",
      name: "Vinsinius Antonius Justicius",
      posts: {
        create: [
          {
            title: "My first day with Prisma",
            categories: {
              create: {
                name: "Programming",
              },
            },
          },
          {
            title: "My nemesis is my phone?!",
            categories: {
              create: [{ name: "lifestyle" }, { name: "personal" }],
            },
          },
        ],
      },
    },
  });

  const returnUser = await prisma.user.findUnique({
    where: { id: user.id },
    include: {
      posts: {
        include: {
          categories: true,
        },
      },
    },
  });

  console.log(returnUser);
}

main();
