// pages/api/fetchStudentById.js
import clientPromise from '../../middleware/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db(process.env.DB_NAME)

  if (req.method === 'GET') {
    const { id } = req.query
    try {
      const student = await db.collection(process.env.STUDENT_COLLECTION).findOne({ _id: id })
      if (student) {
        res.status(200).json(student)
      } else {
        res.status(404).json({ error: 'Student not found' })
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching student' })
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}