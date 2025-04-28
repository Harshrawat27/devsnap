// app/api/waitlist/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { WaitlistEntry } from '@/types/waitlist';

export async function POST(request: NextRequest) {
  try {
    // Updated to extract referral parameter
    const { email, referral } = (await request.json()) as {
      email: string;
      referral?: string;
    };

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        {
          success: false,
          error: 'Valid email is required',
        },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    const { db } = await connectToDatabase();

    // Check if email already exists
    const existingEntry = await db.collection('waitlist').findOne({ email });
    if (existingEntry) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email already registered',
        },
        { status: 409 }
      );
    }

    // Create waitlist entry with referral info if available
    const waitlistEntry: WaitlistEntry = {
      email,
      signupDate: new Date(),
      source: request.headers.get('referer') || 'direct',
      // Add referral if it exists
      ...(referral && { referral }),
    };

    // Insert into database
    await db.collection('waitlist').insertOne(waitlistEntry);

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500 }
    );
  }
}
