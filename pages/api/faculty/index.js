

import deta from '../../../middleware/deta'



export default async function handler(
  req,
  res
) {

let new_users;


  try{
  //   new_user = await prisma.user.findFirst({
  //  where:{
  //   email:email
  //  },
  // })
new_users=await deta.Base('faculty').fetch({})

}catch(err){console.log(err)} 
  // If you don't have the NEXTAUTH_SECRET environment variable set,
  // you will have to pass your secret as `secret` to `getToken`

res.send(JSON.stringify(new_users))
}
