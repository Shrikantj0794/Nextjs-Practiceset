"use client"
import Custom from './custom.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [colore, setColore] = useState("red");

  return (

    <main className='main'>
      <Link href='/productlist'> Go To Product page client side </Link>
      <Link href='/2productlist'> Go To Product page server side </Link>
      <h1 className={colore=='red'?Custom.red:Custom.green}>Hello, My name is Shrikant</h1>
      <button onClick={()=>setColore("green")}>change Colore</button>
    </main>
  )
}
