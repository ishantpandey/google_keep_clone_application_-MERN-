import React, { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Register from './component/Register'
import Home from './component/Home'
import Login from './component/Login'
import Profile from './component/Profile'
import Header from './component/Header'
import Logout from './component/Logout'
import UserState from './context/userState'
import PageNotFound from './component/PageNotFound'
import ViewAll from './component/ViewAll'
import DeleteAll from './component/DeleteAll'
import ListContext from './listCountContext/listContext'



function App() {


  return (
 <>
 <UserState>
  <ListContext>
  <Header />
   
 
   <Routes>
   <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/logout' element={<Logout/>}/>
    <Route path='/profile' element={<Profile />}/>
    <Route path='/viewall' element={<ViewAll />}/>
    <Route path='/deleteall' element={<DeleteAll/>} />
    <Route path='*' element={<PageNotFound />}/>
   
   </Routes>
  </ListContext>

 </UserState>
 </>
  )
}

export default App