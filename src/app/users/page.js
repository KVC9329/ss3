import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method === 'GET') {
      console.log("DB Connected!")
    const users = await prisma.User.findMany();
    res.json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    res.json(user);
  }
}