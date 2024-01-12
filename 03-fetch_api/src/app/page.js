"use client"
import Link from 'next/link'
import { useState } from 'react'
export default function Home() {
  const [change, setchange] = useState({backgroundColor:"red"});
  return (
    <main className='main'>
      <Link href='/productlist' style={change}> Go To Product page client side </Link>
      <button onClick={()=>setchange({backgroundColor:"blue"})}>Change Colore</button>
      <Link href='/2productlist'> Go To Product page server side </Link>
    </main>
  )
}
