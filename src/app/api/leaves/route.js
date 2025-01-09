import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const leaves = await prisma.leave.findMany();
        return NextResponse.json(leaves);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { userId, startDate, endDate, reason } = await req.json();
        const leave = await prisma.leave.create({
            data: { userId, startDate, endDate, reason }
        });
        return NextResponse.json(leave);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
