import React from 'react'
import { useState } from 'react'

function New1() {
const [data,setData]=useState("")


    let click=()=>{
       let a= localStorage.setItem("set1",data)
       console.log(a)
           }
    
  return (
    <div><input type="text" placeholder='add a task' onChange={(e)=>setData(e.target.value)}     />
        <button onClick={click}>+</button>
        {localStorage.getItem("set1")}
    </div>
  )
}

export default New1
