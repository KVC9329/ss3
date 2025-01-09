import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const leads = await prisma.lead.findMany();
        return NextResponse.json(leads);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { userId, name, email, phone } = await req.json();
        const lead = await prisma.lead.create({
            data: { userId, name, email, phone }
        });
        return NextResponse.json(lead);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
