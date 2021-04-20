import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

export default async function handle(req, res) {
  const category = await prisma.category.findMany();
  res.json(category);
}
