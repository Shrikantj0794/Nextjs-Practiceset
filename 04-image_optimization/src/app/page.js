import Image from 'next/image'
import Profile from '../../public/vercel.svg'

export default function Home() {
  return (
    <div className='main'>
      <h1>Image Optimization</h1>
      <Image 
        src={Profile}
        
      />
    </div>
  )
}
