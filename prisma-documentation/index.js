import { PrismaClient } from "@prisma/client";
import { getUserByEmail } from "@prisma/client/sql";

const prisma = new PrismaClient();

async function main() {
  const email = "bobby@capriottis.yum";

  const user = await prisma.$queryRawTyped(getUserByEmail(email));
  console.log(user);
}

main();
