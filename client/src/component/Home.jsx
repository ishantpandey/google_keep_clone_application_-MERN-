import React, { useEffect, useState,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import List from './List'
import '../styles/home.css'
import UserContext from '../context/userContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Sidebar';
import img from '../img/images.png'
import { listContext } from '../listCountContext/listContext';

function Home() {
  const  {LogedIn,setLogedIn}= useContext(UserContext)
  const  {setcount}= useContext(listContext)
  const navigate=useNavigate()
  const[title,settitle]=useState()
  const[desc,setdesc]=useState('')
  const[list,setlist]=useState([])
  const[msg,setmsg]=useState(true)
  const[updatebtn,setupdatebtn]=useState(true)
  const[updateitemid,setupdateitemid]=useState()
 

  const val={title,desc}

  
  const insertData=async(e)=>{
   
    e.preventDefault()
    
    if(updatebtn){
      
     if( val.desc=='') {toast.warning("Please insert an item first")} 
     else{ 
    const inserItem = await fetch("http://localhost:8000/insertitem", {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(val),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include"
            });
            const result=await inserItem.json()
            if(result.msg==="false"){
              navigate('/login')
          }
      settitle('')
      setdesc('')
     
      setmsg(!msg)
      toast.success("Item Added")
        }
        }

    }


const resultData=async()=>{
  try {
    const data= await fetch("http://localhost:8000/userdata",{
      method:'GET',
      mode:'cors',
      headers:{
          'Content-Type':'application/json'
      },
      credentials:"include"
   })
    const result=await data?.json()
   
   if(result?.msg==="true"){
  setLogedIn(true)
   }
   
   
  } catch (error) {
    console.log(error);
  }
 
}
useEffect(()=>{
resultData()
},[])
const todoList=async()=>{
  try {
    const data= await fetch("http://localhost:8000/todolist",{
      method:'GET',
      mode:'cors',
      headers:{
          'Content-Type':'application/json'
      },
      credentials:"include"
   })
    const result=await data?.json()
   
    setlist(result)
    setcount(result?.length)
  } catch (error) {
    console.log(error+"data fetching error");
  }
 

}
useEffect(()=>{
  todoList()
},[msg])
//--------------------deleteItem-----------
const deleteItem= async(id)=>{
  const data= await fetch(`http://localhost:8000/deleteitem/${id}`,{
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
  setmsg(!msg)
}
   
  
  if(result.msg==="false"){
    navigate('/login')
}

}
//------------------update List--------------
const updateItem= (id,description,titles)=>{

 settitle(titles) 
 setdesc(description)
 setupdateitemid(id)
 setupdatebtn(false)


}
const updatedlist=async(itemid)=>{
  const data= await fetch(`http://localhost:8000/updateitem/${itemid}`,{
        method:'PATCH',
        mode:'cors',
        body: JSON.stringify(val),
        headers:{
            'Content-Type':'application/json'
        },
        credentials:"include"
     })
     const result=await data.json()
      if(result.msg==="true"){
        settitle('') 
       setdesc('')
       setupdatebtn(true)
       setmsg(!msg)
       toast.success('Updated Successfully')
 
      }
  if(result.msg==="false"){
    navigate('/')
}
 
}



  return (
    <>
    <div className="container-fluid mt-5">
      <div className="row  ">
        { LogedIn?
        <div className='col-2 col-md-1  sidebar '>
            <Sidebar/> 
         
        </div> :null}
        <div className='col-10 col-md-11 mx-5 center'>
        <div className='container-fluid'>
          <div className='row '>
          <div className=' col-11 col-md-7 mt-5 center mx-auto'>
        <form className="form-inline my-2 my-lg-0 " onSubmit={insertData} style={{maxWidth :"60rem"}}>
             
             <div className='formcontent '>
   {desc ? <input type='text' placeholder='Title' id="item" value={title} onChange={(e)=>{settitle(e.target.value)}}/> : null } 
    <div className='textfield'>
  
    <textarea placeholder='Take a note...'value={desc} onChange={(e)=>{setdesc(e.target.value)}}/>
    {
             updatebtn?  (<button type="submit" className=' material-symbols-outlined submitbutton text-success '>Add</button>) : ( <button onClick={()=>{updatedlist(updateitemid)}} className='  material-symbols-outlined submitbutton text-primary'>update</button>)
             }
   
    </div>
   
   </div>  
                
                
    </form>
        </div> 
          </div>
        </div>
        <div className='container-fluid'>
      <div className='row gx-2 mt-5 '   >
     
      {
        (list?.length>0) ? ( list.map((val,ind)=>{
          return <List key={ind} id={val._id} desc={val.desc} title={val.title} user={val.users} time={val.createdAt}deleteItem={deleteItem} updateItem={updateItem}/>
        })):<div className='col-12 gx-1 col-md-6 mx-auto center  '>
          <img src={img}  alt=''  className='empty-img img img-fluid'/>
        </div>
       
     }

      </div>
     
      </div>
        </div>
    
     
      </div>
    </div>
   
     
  
  <ToastContainer/>


    </>
  )
}

export default Home
