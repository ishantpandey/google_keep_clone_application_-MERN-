import React from 'react'
import notFoundPage from '../img/404.png'
import { NavLink } from 'react-router-dom'
const PageNotFound = () => {
 
 
  return (
    <>
        <div className="container mt-5">
      <div className="row  mt-5 ">
      
        <div className='col-10 col-md-12  mt-5 mx-auto notFoundPage'>
       
        <img src={notFoundPage}  className=' mt-5 mx-auto center img img-fluid' alt=''/>
        </div>
     
      </div>
      <div className='row'>
      <div className='col-10 col-md-10 mt-5 center mx-auto '>
      <NavLink to='/'>Home</NavLink>
    </div>
      </div>
    </div>
  
    </>
  )
}

export default PageNotFound