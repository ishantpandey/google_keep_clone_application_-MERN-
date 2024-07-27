import React,{useContext} from 'react'
import '../styles/sidebar.css'
import { NavLink } from 'react-router-dom'
import { listContext } from '../listCountContext/listContext';

function Sidebar() {
    const  {count}= useContext(listContext)
    return (
   <>
  
   <div class="area fixed"></div>
    <nav class="main-menu ">
    <ul>
        <li >
            <NavLink to="/" className='link'
             style={({isActive})=> isActive ? {color:"#040404"}:{}}> 
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">
                   Home
                </span>
            </NavLink>
          
        </li>
       
        <li class="has-subnav">
            <NavLink to="/viewall" className='link'aria-current="page"
             style={({isActive})=> isActive ? {color:"#040404"}:{}}> 
               <i class="fa fa-eye fa-2x"></i>
                <span class="nav-text">
                    View All
                </span>
            </NavLink>
            
        </li>
      
       
        <li>
           <NavLink to="/deleteall" className='link' 
           style={({isActive})=> isActive ? {color:"#040404"}:{}}> 
               <i class="fa fa-trash-o fa-2x"></i>
                <span class="nav-text">
                    Delete All List
                </span>
            </NavLink>
        </li>
        
        <li class="has-subnav">
            <NavLink to="/profile" className='link'
             style={({isActive})=> isActive ? {color:"#040404"}:{}}> 
                <i class="fa fa-user fa-2x"></i>
                <span class="nav-text">
                    Profile
                </span>
            </NavLink>
            
        </li>
        <li>
            <NavLink to="/logout" className='link'
             style={({isActive})=> isActive ? {color:"#040404"}:{}}> 
               <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">
                Logout
                </span>
            </NavLink>
        </li>
        <li>
           <NavLink to="/" className='link' style={{fontWeight:'bold'}} >
          
               <i class="fa  fa-2x" style={{fontWeight:'bold',fontSize:'30px'}}>{count}</i>
                <span class="nav-text">
                    Total List {count}
                </span>
            </NavLink>
        </li>
    </ul>  
    
</nav>
  
   
   </>

    )
}

export default Sidebar