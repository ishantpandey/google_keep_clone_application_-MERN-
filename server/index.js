const express=require('express')
const router = require('./router/router')
const cookieparser=require('cookie-parser')
require('./db/connection')
const cors =require('cors')
const app=express()
const dotenv=require('dotenv')
dotenv.config()
app.use(cookieparser())
app.use(express.json())
app.use(cors({
    
    credentials: true,
  
     origin:"http://localhost:3000"
    
 }))
app.use(express.urlencoded({extended:false}))
app.use('/',router)


const PORT=process.env.PORT 

app.listen(8000,()=>{
    console.log('server started');
})
