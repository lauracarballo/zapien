import { PrismaClient } from "@prisma/client";

export default async (req, res) => {
  if (req.method !== "POST") return res.status(405).end();

  const prisma = new PrismaClient({ log: ["query"] });

  try {
    const {
      title,
      imageUrl,
      startDate,
      endDate,
      description,
      brief,
      brandId,
      categoryId,
    } = req.body;
    // console.dir(req, { depth: null });

    await prisma.contact.create({
      data: {
        title,
        imageUrl,
        startDate,
        endDate,
        description,
        brief,
        brandId,
        categoryId,
      },
    });
    res.json({ submitted: true });
  } catch (error) {
    res.status(500);
    res.json({ submitted: false, error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};
