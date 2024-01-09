"use client"

import Link from "next/link"
export default function Studentlist(){
    return(
        <div>
            <h1>Student List</h1>
            <ul>
            <li>
                <Link href="/about/studentlist/anil">anil</Link>
            </li>
            <li>
                <Link href="/about/studentlist/mahesh">mahesh</Link>
            </li>
            <li>
                <Link href="/about/studentlist/prathvi">prathvi</Link>
            </li>
            <li>
                <Link href="/about/studentlist/shri">shri</Link>
            </li>
            </ul>
        </div>
    )
}