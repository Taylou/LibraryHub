import { MongoClient } from 'mongodb';

const uri = "mongodb://127.0.0.1:27017";
const dbName = "libraryhub";

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export async function connectToDatabase() {
  try {
    const client = await clientPromise;
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw new Error('Unable to connect to database');
  }
}