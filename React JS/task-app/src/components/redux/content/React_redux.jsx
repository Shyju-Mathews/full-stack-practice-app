import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Products from './Products'
import Counter from './Counter'

const data = [
  {
    id: 1,
    name: "Shyju",
    age: 25,
    email: "shyju123@gmail.com"
  },
  {
    id: 2,
    name: "Mathews",
    age: 25,
    email: "mathews123@gmail.com"
  }
]

// console.log(data, "ddddddddddd")

const React_redux = () => {
  const [users, setUsers] = useState(data)

  const getUsers = () => {
    const res = data.filter((item) => item.name)
    // console.log(res, "resssssssss")
    setUsers(res)
    // dispatch(setUsers(res))
  }

  useEffect(() => {
    getUsers()
  }, [])
  


  return (
    <div>
      <p  style={{textAlign: "center", fontSize: "2rem", fontStyle: "italic", fontWeight: "bolder"}}>User Data</p>
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {
              users && users.map((user, index) => (
                
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.email}</td>
                </tr>
                
              ))
            }
          </tbody>
        </table>
      </div>

      <div>
      <Products />
      <Counter />
      </div>
    </div>
  )
}

export default React_redux