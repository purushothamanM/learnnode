import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function UsersData() {
  const [Users, fetchUsers] = useState([])
  const [isAuth,setsIsAuth]=useState(true);
 
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchUsers(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  
  

  return (
    <>
     
      <ul>
        {Users.map((item, i) => {
          return <li key={i}>{item.userId} </li>
        })}
      </ul>
    </>
  )
}
