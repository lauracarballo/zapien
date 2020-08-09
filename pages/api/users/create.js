import { PrismaClient } from '@prisma/client';

export default async (req, res) => {
  // if (req.method !== 'POST') return res.status(405).end();

  const prisma = new PrismaClient({ log: ['query'] });

  try {
    // const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name: 'James',
        email: 'james@allbirds.com',
        role: 'BRAND',
        Brand: {
          create: {
            name: 'Allbirds',
            description: 'Eco-shoes',
            logoUrl: '',
            Category: { create: { name: 'Fashion' } },
          },
        },
      },
    });
    res.json({ user });
  } catch (error) {
    res.status(500);
    res.json({ error: error.message });
  } finally {
    await prisma.$disconnect();
  }
};
