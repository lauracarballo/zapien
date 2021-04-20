import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

export default async function handle(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  try {
    const {
      title,
      startDate,
      endDate,
      description,
      brief,
      categoryId,
    } = req.body;

    await prisma.campaign.create({
      data: {
        title: title,
        startDate: startDate,
        endDate: endDate,
        description: description,
        brief: brief,
        Brand: {
          connect: {
            id: 1,
          },
        },
        Category: {
          connect: {
            id: categoryId,
          },
        },
      },
    });
    res.json({ submitted: true });
  } catch (error) {
    console.log(error);
    res.status(500);
    res.json({ submitted: false, error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
