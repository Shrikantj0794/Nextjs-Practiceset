"use client"
import Custom from './custom.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [colore, setColore] = useState("red");
  const print = 'true';
  return (

    <main className='main'>
      <Link href='/productlist'> Go To Product page client side </Link>
      <Link href='/2productlist'> Go To Product page server side </Link>
      <h1 className={colore=='red'?Custom.red:Custom.green}>My name is Shrikant</h1>
      <button onClick={()=>setColore("green")}>change Colore</button>

      <h1 style={colore=="red"? {color:'red'}:{color:'blue'}}>My name is Shri</h1>
      <button onClick={()=>setColore({color:'blue'})}>change Colore</button>

      {print=='true'? <h1>HI</h1>: <h1>Hello</h1> }
    </main>
  )
}
