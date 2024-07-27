import React, {useContext , useEffect}from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Logout() {
   
     const  { setLogedIn}  = useContext(UserContext)
 
    const navigate = useNavigate()

    const logout = async () => {

        
        try {
            const res = await fetch('http://localhost:8000/logout', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
                credentials: 'include'
            });

            const response = await res.json()
         
            console.log(response);
         
            if (response.msg="true" ) {
                setLogedIn(false);
                toast.warning("Logout")
            
              
                return navigate('/');
            } 
        } catch (error) {
            console.error('Error during logout:', error);
        }
    
        navigate('/');
    };
    
    useEffect(()=>{

        logout()
    },[])

    
   
  return (
    <div>
     ToastContainer 
    </div>
  )
}

export default Logout