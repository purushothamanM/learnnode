import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function UsersData() {
  const [Users, fetchUsers] = useState([])
 const navigate=useNavigate();
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  const handleClick=()=>{
 navigate("/Posting")
  }

  return (
    <>
     
      <ul>
        {Users.map((item, i) => {
          return <li key={i}>{item.name}  <button onClick={()=>handleClick}>click</button></li>
        })}
      </ul>
    </>
  )
}
