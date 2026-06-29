import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router'
function Github() {
  const data=useLoaderData()
  /* const [data , setData]=useState([])
     useEffect(()=>{
    fetch('https://api.github.com/users/Adityagunjan9955')
    .then(response =>response.json)
    .then(data=>{
      console.log(data);
      setData(data)
    })
  },[])*/
/*useEffect(() => {
  fetch('https://api.github.com/users/example')
    .then(response => response.json()) 
    .then(data => setData(data))     
    .catch(error => console.error(error));
}, []);*/
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers : {data.followers}
     <img src={data.avatar_url} alt="Git picture" width={100} />
    </div>
  )
}

export default Github


export const githubinfoloader = async()=>{
 const response=await fetch('https://api.github.com/users/Adityagunjan9955')
 return response.json()
}