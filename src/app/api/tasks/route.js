import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const tasks = await prisma.task.findMany();
        return NextResponse.json(tasks);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { userId, title, description, dueDate } = await req.json();
        const task = await prisma.task.create({
            data: { userId, title, description, dueDate }
        });
        return NextResponse.json(task);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
