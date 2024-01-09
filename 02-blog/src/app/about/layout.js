'use client'

import Link from "next/link";
import { usePathname } from "next/navigation"

export default function Layout({children}){
    const pathname = usePathname();
    return(
        <div>{
        //conditional layout
        // condition for hidding navbar

        pathname!=='/about/aboutstu'?
        
            <ul className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about/aboutclg">About College</a></li>
                <li><a href="/about/aboutstu">About Student</a></li>
                <li><a href="/about/studentlist">Student Daitals</a></li>
            </ul> : null
        }
        {children}
        </div>
    )
} 