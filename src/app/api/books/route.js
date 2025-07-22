import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';

export async function GET() {
  try {
    const db = await connectToDatabase();
    const booksCollection = await db.collection('books');
    const books = await booksCollection.find({}).toArray();
    
    return NextResponse.json(books);
  } catch (error) {
    console.error('Failed to fetch books:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
