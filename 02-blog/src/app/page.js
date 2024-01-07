'use client' //must import use client directive for events run on client side server
import styles from './page.module.css'
export default function Home() {

  // Function
  const name = ()=>{
    alert('hello, my name is shri')
  }
  return (
    <main className={styles.main}>
     <h2>Events, Functions and state</h2>
     {/* On click id a Event */}
     <button onClick={name}>Click Me</button>
    </main>
  )
}

