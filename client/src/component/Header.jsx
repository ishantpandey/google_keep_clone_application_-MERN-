import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../context/userContext';
import logo from '../img/keep.png'
import '../styles/headers.css'

function Header() {
  const  {LogedIn}  = useContext(UserContext)
  return (
    <>

<nav className="navbar navbar-expand-sm navbar-light fixed-top">
  <div className="container-fluid mx-3 ">
   <div className='d-flex left-content '>
   <img src={logo} className='logo-img img img-fluid' alt=''/>
<strong><h3>Keep</h3></strong>
   </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <div className="navbar-nav me-auto">
       
      </div>
      <div className="d-flex ">
        <ul className='navbar-nav'>
        <li className="nav-item" >
          <NavLink  style={({isActive})=> isActive ? {borderBottom:"2px solid rgb(114, 233, 122)"}:{}} className="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
       
        <li className="nav-item" >
          <NavLink style={({isActive})=> isActive ? {borderBottom:"2px solid rgb(114, 233, 122)"}:{}} className="nav-link " aria-current="page" to="/profile">Profile</NavLink>
        </li>
      
      {
        LogedIn?

        <li className="nav-item" >
        <NavLink style={({isActive})=> isActive ? {borderBottom:"2px solid green"}:{}} className="nav-link " aria-current="page" to="/logout">Logout</NavLink>
      </li> :
      <li className="nav-item" >
      <NavLink style={({isActive})=> isActive ? {borderBottom:"2px solid rgb(114, 233, 122)"}:{}} className="nav-link " aria-current="page" to="/login">Login</NavLink>
    </li> 
    
     }
        </ul>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header