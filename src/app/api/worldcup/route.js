import { NextResponse } from 'next/server';
import { connectDB } from '@/library/mongodb';

export async function GET() {
    try {
        const db = (await connectDB).db('Travel-App');
        const collection = db.collection('worldcup');
        const worldcup = await collection.find({}).toArray();

        return NextResponse.json({ success: true, data: worldcup });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message });
    }
}