import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

export default async function handle(req, res) {
  const user = await prisma.user.findOne({
    where: {
      id: 1,
    },
    include: {
      Brand: {
        include: {
          Campaign: true,
          Category: true,
        },
      },
    },
  });
  res.json(user);
}
