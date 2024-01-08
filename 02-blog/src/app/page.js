'use client' //must import use client directive for events run on client side server
import Link from 'next/link';
import styles from './page.module.css'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  // page render using Button Navigation
  const router = useRouter(); 
  const renderTo = ()=>{
    return(
    router.push("/login")
  )}
  // state
  const [name1, setname1] = useState('My name is Shri');

  // Function
  const change = ()=>{
    setname1('My name is Shrikant')
  }
 
  return (
    <main className={styles.main}>
     <h2>{name1}</h2>
     {/* On click id a Event */}
     <button onClick={change}>Click Me</button>

     <Link href="/login">Go to Login page</Link>
    
     <Link href="/about">Go to About page</Link>
  
    <button onClick={renderTo}>Go to Ligin page</button>
    </main>
  )
}

