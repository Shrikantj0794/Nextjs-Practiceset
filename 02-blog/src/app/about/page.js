import Link from 'next/link';
function page() {
  return (
    <div>
      <h1>About page</h1>
      <Link href="/">Go to Home page</Link>
      <br/>
      <br/>
      <Link href="/about/aboutclg">Go to About college page</Link>
      <br />
      <Link href="/about/aboutstu">Go to About student page</Link>
    </div>
  )
}

export default page
