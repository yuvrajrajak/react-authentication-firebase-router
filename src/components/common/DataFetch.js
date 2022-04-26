import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const DataFetch = () => {
  const [users, setUser] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2').then((response) => {
      let people = response.data.data;
      setUser(people);
    })
  },[])


  return (
    <>
     <h1>Fetching</h1>
     <ul>
       {
         users.map((user)=><li key={user.id}>{user.first_name}</li>)
       }
     </ul>
     
    </>
  )
}

export default DataFetch