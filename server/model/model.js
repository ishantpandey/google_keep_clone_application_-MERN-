const mongoose=require('mongoose');

const loginSchema=new mongoose.Schema({
    names:{
        type:String,
        require:true,
    },
   
    email:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
        unique:true
    }

})

const Login=new mongoose.model('Userdata',loginSchema)

module.exports=Login;