import React from 'react'

async function getAUserById(userId: string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    if(!res.ok) return undefined
  return res.json()
}

export default getAUserById
