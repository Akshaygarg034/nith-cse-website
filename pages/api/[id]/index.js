

import deta from '../../../middleware/deta'



export default async function handler(
  req,
  res
) {

  const { id } = req.query
let new_user;


  try{
  //   new_user = await prisma.user.findFirst({
  //  where:{
  //   email:email
  //  },
  // })
new_user=await deta.Base('users').get(id)

}catch(err){console.log(err)} 
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`

res.send(JSON.stringify(new_user))
}
