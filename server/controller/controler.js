
const Login=require('../model/model')
const ListData=require('../model/listModel')
const bcrypt=require('bcrypt')
const {signUser,varifyUser}=require('../service/auth')

const homepage=async(req,res)=>{
  try {
   const token=req.cookies?.tokens;
  
    if(token){
      const userData=await varifyUser(token)
    
      return  res.status(200).json({userData,msg:"true"})
    }
    else{
        return  res.status(200)
        .json({msg:'false',
            success:false,
          }
        ) 
    }
  } catch (error) {
    console.log(error);
    res.send(error);
   }
  }
const registerPage=async(req,res)=>{
    const haspassword= await bcrypt.hash(req.body.password,10)
   
  await Login.create({
    names:req.body.names,
    email:req.body.email,
    phone:req.body.phone,
    password:haspassword,
  })

  res.status(201).send({
    success:true,
    msg:'register successfully'
  })
}
const loginPage=async(req,res)=>{
    const email=req.body.email;
   
    try {
     
        const result = await Login.findOne({email})
        const pass= await bcrypt.compare(req.body.password,result.password)
     
        if(pass){
           const token=await signUser(result)
         
           return  res.cookie("tokens", token, {
            secure:true,
            httpOnly: true,

       }).json({ success: true, msg: "true" })
          
        }
      else{
      
       return res.json({success:false, msg: "false"})
      }
         
    } catch (error) {
     console.log(error);
     res.send(error);
    }
}
const logoutPage=async(req,res)=>{
  try {
    
    const listData=await ListData.find({users:req.user.id})
   
    if(listData){
       
      return  res.clearCookie("tokens").status(200).json({msg:"true"})
    }
    else{
        return  res.status(200)
        .json({msg:'false',
            success:false,
          }
        ) 
    }
  } catch (error) {
    console.log(error);
    res.send(error);
   }
  
}
const userProfile=async(req,res)=>{
  try {
   const user= await Login.find({_id:req.user.id})
    
 
    if(user){
       console.log(user);
      return  res.status(200).send(user)
    }
    else{
        return  res.status(200)
        .json({msg:'false',
            success:false}
        ) 
    }
  } catch (error) {
    console.log(error);
    res.send(error);
   }
  
}
//-----------------List--------------------
const todoList=async(req,res)=>{
  try {
  
    const listData=await ListData.find({users:req.user.id})
   
    if(listData){
       
      return  res.status(200).send(listData.reverse())
    }
    else{
        return  res.status(200)
        .json({msg:'false',
            success:false,
          }
        ) 
    }
  } catch (error) {
    console.log(error);
    res.send(error);
   }
  
}
const insertList=async(req,res)=>{
  const title=req.body.title;
  const desc=req.body.desc;
 
  try {
       const time=`${new Date().toTimeString().split(' ')[0].slice(0,5)},${new Date().toString().slice(0,10)}`
      const result = await ListData.create({title,desc,createdAt:time,users:req.user.id,})
   
      
      if(result){
        return res.status(200).json({success:true, msg: "true"})  
      }
    else{
    
     return res.status(200).json({success:false, msg: "false"})
    }
       
  } catch (error) {
   console.log(error);
   res.send(error);
  }
}

const deleteitem=async(req,res)=>{
 const _id=req.params.id
 
  try {
   
      const result = await ListData.findByIdAndDelete({_id})
      
      if(result){
        return res.status(200).json({success:true, msg: "true"})  
      }
    else{
    
     return res.status(200).json({success:false, msg: "false"})
    }
       
  } catch (error) {

   res.send(error);
  }
}

const deleteAllItem= async(req,res)=>{
  try {
    const result=await ListData.deleteMany({})
    if(result){
      return res.status(200).json({success:true, msg: "true"})  
    }
  else{
  
   return res.status(200).json({success:false, msg: "false"})
  }
  } catch (error) {
 
   res.send(error);
  }
}

const updateitem=async(req,res)=>{
  const _id=req.params.id
  
   try {
    
       const result = await ListData.findByIdAndUpdate(_id,req.body);
       
       if(result){
         return res.status(200).json({success:true, msg: "true"})  
       }
     else{
     
      return res.status(200).json({success:false, msg: "false"})
     }
        
   } catch (error) {
    console.log(error);
    res.send(error);
   }
 }



module.exports={registerPage,loginPage,logoutPage,userProfile,todoList,insertList,homepage,deleteitem,deleteAllItem,updateitem}