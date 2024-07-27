import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/profile.css'
import Sidebar from './Sidebar'
import '../styles/sidebar.css'



function Profile() {
  const navigate = useNavigate()
  const [val, setval] = useState([])
  const resultData = async () => {
    const data = await fetch("http://localhost:8000/user", {
      method: 'GET',
      mode: 'cors',

      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include"
    });
    const result = await data.json()
    console.log(result);

    if (result.msg === "false") {
      navigate('/login')
    }

    setval(result)
  }
  useEffect(() => {
    resultData()
  }, [])

  return (
    <>
       {val[0]? ( 
       <div className='container'>
       <div className='row'>
       <div className='col-2 col-md-2'>
         <Sidebar/>
       </div>
       <div className='col-10 col-md-8 mt-5'>
              <div class="container emp-profile ">
          
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                       {val[0].names}
                                    </h5>
                                    <h6>
                                        Web Developer and Designer
                                    </h6>
                                 
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 mb-2">
                       
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                       
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <p>{val[0].names}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <p>{val[0].names}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <p>{val[0].email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6 col-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6 col-6">
                                                <p>{val[0].phone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Profession</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{val[0].profession}</p>
                                            </div>
                                        </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
                  
        </div>
       </div>
       </div>
       </div>
       
):null} 
     
    </>
  )
}

export default Profile