const express =require('express')
const router=express.Router()
const {restrictUser}=require('../middleware/authentication')
const { registerPage,loginPage,logoutPage,userProfile ,todoList,insertList,homepage,deleteitem,deleteAllItem,updateitem} = require('../controller/controler')

router.get('/userdata',restrictUser,homepage)
router.post('/register',registerPage)
router.post('/login',loginPage)
router.get('/logout',restrictUser,logoutPage)
 router.get('/user',restrictUser,userProfile)
 router.post('/insertitem',restrictUser,insertList)
 router.get('/todolist',restrictUser,todoList)
 router.delete('/deleteitem/:id',restrictUser,deleteitem)
 router.delete('/deleteallitem',restrictUser,deleteAllItem)
 router.patch('/updateitem/:id',restrictUser,updateitem)

module.exports= router