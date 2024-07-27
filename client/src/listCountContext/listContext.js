import React, { createContext, useState } from 'react'

const listContext=createContext()
const ListContext = (props) => {
    const[count,setcount]=useState('0')
  return (
   <listContext.Provider value={{count,setcount}}>
   {props.children}
   </listContext.Provider>
  )
}

export default ListContext
export {listContext}