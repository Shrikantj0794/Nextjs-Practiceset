"use client"
import { useState, useEffect } from "react"

export default function Page(){
    const [product, setProduct] = useState([]);
    const fetchdata = async ()=>{
        let data = await fetch("https://dummyjson.com/products");
        data = await data.json();
        // console.log(data)
        setProduct(data.products)
    }
    useEffect(()=>{
        fetchdata();
    },[])

    return(
        <div className="main">
            <h1>Product List</h1>
            {
                product.map((items)=>{
                    // must write return keyword
                    return(
                    <h3>Name: {items.title}</h3>
                    )
                })
            }
        </div>
    )
}