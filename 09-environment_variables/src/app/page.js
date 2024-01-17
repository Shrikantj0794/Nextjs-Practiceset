import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      {
        process.env.NODE_ENV == 'development'?
        <h1>You are in development mode</h1>:
        <h1>You are in production mode</h1>
      }
      <h1>Environment Variables in Next.js</h1>
    </main>
  )
}
