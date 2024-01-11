
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href='/productlist'> Go To Product page client side </Link>
      <Link href='/2productlist'> Go To Product page server side </Link>
    </main>
  )
}
