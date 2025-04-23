// lib/mongodb.ts
import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI as string;
const MONGODB_DB = process.env.MONGODB_DB || 'devsnap';

// Check if MongoDB URI is defined
if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface CachedConnection {
  client: MongoClient | null;
  db: Db | null;
}

// Cached connection
let cached: CachedConnection = { client: null, db: null };

export async function connectToDatabase(): Promise<{
  client: MongoClient;
  db: Db;
}> {
  // If we have a cached connection, return it
  if (cached.client && cached.db) {
    return { client: cached.client, db: cached.db };
  }

  // Connect to MongoDB
  const client = await MongoClient.connect(MONGODB_URI);
  const db = client.db(MONGODB_DB);

  // Cache the connections
  cached = { client, db };

  return { client, db };
}
