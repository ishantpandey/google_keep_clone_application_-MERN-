import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteAll = () => {
    const navigate=useNavigate()
    const deleteAllItem= async(id)=>{
        const data= await fetch(`http://localhost:8000/deleteallitem`,{
          method:'DELETE',
          mode:'cors',
          headers:{
              'Content-Type':'application/json'
          },
          credentials:"include"
       })
        const result=await data.json()
        
      
      if(result.msg==="true"){
        toast.success('Deleted Successfully')
        navigate('/')
      }
         
        
        if(result.msg==="false"){
          navigate('/login')
      }
      
      }
      useEffect(()=>{deleteAllItem()},[])
  return (
    <>
    <ToastContainer/>
    </>
  )
}

export default DeleteAll