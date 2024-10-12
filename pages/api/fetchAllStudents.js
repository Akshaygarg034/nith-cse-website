// pages/api/fetchallstudents.js
import clientPromise from '../../middleware/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db(process.env.DB_NAME);

  if (req.method === 'GET') {
    const { page = 1, limit = 12, search = '' } = req.query;
    const skip = (page - 1) * limit;

    // Create a search query
    const searchQuery = search
      ? {
          $or: [
            { name: { $regex: search, $options: 'i' } },
            { _id: { $regex: search, $options: 'i' } }
          ]
        }
      : {};

    const students = await db.collection(process.env.STUDENT_COLLECTION)
      .find(searchQuery)
      .skip(skip)
      .limit(parseInt(limit))
      .toArray();

    const total = await db.collection(process.env.STUDENT_COLLECTION).countDocuments(searchQuery);

    res.status(200).json({ students, total, page: parseInt(page), limit: parseInt(limit) });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}