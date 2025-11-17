import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const usersAndPosts = await prisma.user.create({
    data: {
      posts: {
        create: [{ title: "I like burgers" }, { title: "I love sushi" }],
      },
    },
  });

  const getAuthor = await prisma.user.findUnique({
    where: {
      id: 1,
    },
    include: {
      posts: true,
    },
  });

  const updateAuthor = await prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      posts: {
        connect: {
          id: 4,
        },
      },
    },
  });
}

main();
