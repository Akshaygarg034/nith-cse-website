// pages/api/students.js
import clientPromise from '../../middleware/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)

  if (req.method === 'GET') {
    const students = await db.collection(process.env.STUDENT_COLLECTION).find({}).toArray()
    res.status(200).json(students)
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}