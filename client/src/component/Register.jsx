import React, { useState } from 'react'
import { useNavigate,NavLink} from 'react-router-dom';
import '../styles/login.css'


function Register() {
    const navigate =useNavigate()
    const [val,setval]=useState({
        names:'',
        email:'',
        phone:'',
        profession:'',
        password:''
    })
    const handleEvent=(e)=>{
        const {name,value}=e.target;
        setval({
            ...val,
            [name]:value
        })
     
    }
    const formSubmit=async(e)=>{
         e.preventDefault()
         try {
            const userData= await fetch("http://localhost:8000/register",{
                method:'POST',
                mode:'cors',
                body:JSON.stringify(val),
                headers:{
                    'Content-Type':'application/json'
                },
                credentials:"include"
             });
             const result=await userData.json()
             setval({
                names:'',
                email:'',
                phone:'',
                password:''
            })
            console.log(result);
            if(result.msg==="false"){
                navigate('/register') 
            }
            navigate('/login')
           
         } catch (error) {
            console.log(error);
         }
       
       
        
    }
  return (
  <>
  
             
             <div className='loginpage'>
           <div class="box">
	<form onSubmit={formSubmit}>
		<span class="text-center">Sign Up</span>
        <div class="input-container">
		<input type="text"ariaDescribedby = "name"  name='names' value={val.names} onChange={handleEvent} required/>
		<label>Full Name</label>		
	</div>
	<div class="input-container">
		<input type="email"ariaDescribedby = "emailHelp" name='email' value={val.email} onChange={handleEvent} required />
		<label>Email</label>		
	</div>
   
    <div class="input-container">
		<input type="text"  name='phone' value={val.phone} onChange={handleEvent} required />
		<label>Phone No.</label>
        </div>
        <div class="input-container">
		<input type="text"  name='profession' value={val.profession} onChange={handleEvent} required />
		<label>Profession</label>
        </div>
	<div class="input-container">		
		<input type="password"  name='password' value={val.password} onChange={handleEvent} required/>
		<label>Password</label>
	</div>
    <div className='register-link'>
    <NavLink htmlFor = "exampleInputEmail1" className="text-light" to={'/login'}><label>Have an account ?</label></NavLink>
              
    </div>
		<button type="submit" class="login-btn">submit</button>
</form>	
</div>
</div>
  </>
  )
}

export default Register