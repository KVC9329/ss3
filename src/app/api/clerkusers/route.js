import { getAuth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

export async function GET(req) {
    const { userId } = getAuth(req)

  if (!userId) {
    return NextResponse.json({ error: 'Not authenticated'}, {status: 401})
  }

  // Add logic that retrieves the data for the API route

  return NextResponse.json({ userId: userId }, {status: 200})
}