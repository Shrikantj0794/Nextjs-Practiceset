'use client' //must import use client directive for events run on client side server
import styles from './page.module.css'
import { useState } from 'react';
export default function Home() {
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
    </main>
  )
}

