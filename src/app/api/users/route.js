import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

// Handle GET request
export async function GET() {
    try {
        const users = await prisma.user.findMany();
        console.log("DB Connected!");

        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

// Handle POST request
export async function POST(req) {
    try {
        const { name, email } = await req.json(); // Correctly parsing request body

        const user = await prisma.user.create({
            data: { name, email },
        });

        return NextResponse.json({message : "User Creted Successfully!"},user);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
