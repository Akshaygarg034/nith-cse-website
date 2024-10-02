// pages/api/faculty.js
import clientPromise from '../../middleware/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('nith-db')

  if (req.method === 'GET') {
    const faculty = await db.collection('announcements').find({}).toArray()
    res.status(200).json(faculty)
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}