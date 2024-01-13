import Link from "next/link"
import { Roboto } from "next/font/google"
const roboto = Roboto({
  weight: '100',
  subsets:['latin'],
  display: "swap"
})
export default function Home() {
  return (
    <div className='main'>
      <h1 style={{fontFamily: 'Lemon', fontWeight:100}}>Font with Link Tag in Next</h1>
      <h1 className={roboto.className}>Font optimization in Next</h1>
      <Link href='/user'>Go to User Page</Link>
    </div>
  )
}
