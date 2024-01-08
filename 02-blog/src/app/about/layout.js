export default function Layout({children}){
    return(
        <navbar>
            <ul className="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about/aboutclg">About College</a></li>
            </ul>
            {children}
        </navbar>
    )
} 