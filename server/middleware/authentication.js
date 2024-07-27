const { varifyUser } = require("../service/auth");


async function restrictUser(req,res,next){
 const token=req.cookies?.tokens;
 
 if(!token) {return res.json({msg:"false"})}

 const user=varifyUser(token)

 
 if(!user) {return res.json({msg:"false"})}
 req.user=user

next()
} 

module.exports={restrictUser};