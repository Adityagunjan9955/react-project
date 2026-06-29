import React from 'react'
import { useParams } from 'react-router'

function User() {
  const {userid}=useParams()
  return (
    <div className='flex justify-center'>User:{userid}</div>
  )
}

export default User