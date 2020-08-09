import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
  if (req.method !== 'GET') return res.status(405).end();

  const prisma = new PrismaClient({ log: ['query'] });

  try {
    const users = await prisma.user.findMany({ include: { Brand: true } });
    res.json({ users });
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};
