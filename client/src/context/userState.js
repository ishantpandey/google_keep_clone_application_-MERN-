import UserContext from "./userContext";
import React ,{useState} from 'react'

function UserState(props) {
    const [LogedIn , setLogedIn] = useState(false)
 
  return (
    
    <UserContext.Provider value={{LogedIn, setLogedIn}}>
        {props.children}
    </UserContext.Provider>

  )
}

export default UserState