
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href='/products'> Go To Product page</Link>
    </main>
  )
}
