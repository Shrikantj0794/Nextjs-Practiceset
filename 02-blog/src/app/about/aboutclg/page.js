import Link from 'next/link';
function page() {
  return (
    <div className='main'>
      <h1>About college</h1>
      <Link href="/about">Go to about page</Link>
    </div>
  )
}

export default page