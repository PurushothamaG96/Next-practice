import React from 'react'

async function getAllUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    if(!res.ok) return undefined
  return res.json()
}

export default getAllUsers
