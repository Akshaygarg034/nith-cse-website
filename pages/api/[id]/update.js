
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import deta from '../../../middleware/deta'


export default async function handler(
  req,
  res
) {

  const { id } = req.query

  let new_user=null;
  const session = await getServerSession(req, res, authOptions)

if (session || true){
  if(req.method==="POST" ){

  try{
    // const updateUser = await prisma.user.update({
    //   where: {
    //     email: email,
    //   },
    //   data: {
    //     ...req.body
    //   },
    // })
     await deta.Base('users').update(req.body,id)
     new_user=await deta.Base('users').get(id)
  }catch(err){console.log(err)} 
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`
  
}
else{
  new_user={'error':"user either already exist or method is not post"}
}}
else{
  new_user={'error':"user not authenticated"}
}

res.send(JSON.stringify(new_user))
}
