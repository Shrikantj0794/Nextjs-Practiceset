import Link from "next/link";

export default function Home(){
  return(
    <div className="main">
      <Link href='/api'>Go to API page</Link>
    </div>
  )
}