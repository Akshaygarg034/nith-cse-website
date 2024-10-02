import clientPromise from '../../middleware/mongodb'
import { getServerSession } from 'next-auth/next'
import { authOptions } from "./auth/[...nextauth]"

export default async function handler(req, res) {
  const { id } = req.query
  let new_user = null
  const session = await getServerSession(req, res, authOptions)
  console.log(session)

  if (session) {
    if (req.method === 'POST') {
      try {
        const client = await clientPromise
        const db = client.db(process.env.DB_NAME)
        new_user = await db.collection(process.env.STUDENT_COLLECTION).updateOne(
          { _id: id },
          { $set: req.body },
          { upsert: true }
        )
      } catch (err) {
        console.log(err)
        new_user = { error: 'Error updating or creating user' }
      }
    } else {
      new_user = { error: 'Method not allowed' }
    }
  } else {
    new_user = { error: 'User not authenticated' }
  }

  res.send(JSON.stringify(new_user))
}