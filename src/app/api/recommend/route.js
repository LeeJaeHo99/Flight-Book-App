import { NextResponse } from 'next/server';
import { connectDB } from '@/library/mongodb';

export async function GET() {
    try {
        const db = (await connectDB).db('Travel-App');
        const collection = db.collection('recommend');
        const recommend = await collection.find({}).toArray();

        return NextResponse.json({ success: true, data: recommend });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}