// app/api/waitlist/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { WaitlistEntry } from '@/types/waitlist';
import { extractUsernameFromEmail } from '@/utils/email';

export async function POST(request: NextRequest) {
  try {
    // Extract data from request
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

    // Extract username from email
    const username = extractUsernameFromEmail(email);

    // Validate the referral if provided
    let validReferral = false;
    if (referral) {
      // Check if the referral username exists in the database
      const referringUser = await db
        .collection('waitlist')
        .findOne({ username: referral });
      validReferral = !!referringUser;
    }

    // Create waitlist entry with username, referral (if valid), and initialize referralCount
    const waitlistEntry: WaitlistEntry = {
      email,
      username,
      signupDate: new Date(),
      source: request.headers.get('referer') || 'direct',
      referralCount: 0, // Initialize referral count to zero
      // Only add the referral if it's valid
      ...(validReferral && referral ? { referral } : {}),
    };

    // Insert the new user into the database
    await db.collection('waitlist').insertOne(waitlistEntry);

    // If there's a valid referral, increment the referral count for the referring user
    if (validReferral && referral) {
      await db
        .collection('waitlist')
        .updateOne({ username: referral }, { $inc: { referralCount: 1 } });
    }

    // Return success
    return NextResponse.json(
      {
        success: true,
        message: 'Successfully added to waitlist',
        username, // Return the generated username
        referralValid: validReferral, // Optionally inform if referral was valid
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
