'use client'
import { useState, useEffect } from "react"

export default function Home() {
  const [data, setdata] = useState([]);
 
  const fetchdata = async ()=>{
    let fetchd = await fetch('https://dummyjson.com/products');
    fetchd = await fetchd.json();
  
    setdata(fetchd.products)
  }

  useEffect(()=>{
    fetchdata();
  },[])

  return (
    <div className='main'>
      <h1>Loader add in api</h1>
      {
        data.map((item)=>{
          return(
            <h3>Name: {item.title}</h3>
          )
        })
      }
    </div>
  )
}
