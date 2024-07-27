const mongoose=require('mongoose');

const listSchema=new mongoose.Schema({
    title:{
        type:String,
        
    },
    desc:{
            type:String,
            required:true
            
    },
    createdAt: {
      type: String,
      
    },
   users:{
     type:mongoose.Schema.Types.ObjectId,
     ref:'Userdata'
   },
  
},{timeStamps:true} )

const ListData=new mongoose.model('listdata',listSchema)

module.exports=ListData;