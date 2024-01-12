
async function Productlist(){
    let data = await fetch("https://dummyjson.com/products");
    data = await data.json();
    // console.log(product)
    return data.products
}

import Product from "./product";

export default async function Page (){
    let products = await Productlist();
    return(
        <div className="main">
        <h1>Fetch api in server side</h1>
        {
            products.map((items)=>{
                return(
                    <div>
                        <h4>Name: {items.title}</h4>
                        <br />
                        <Product price={items.price}/>
                    </div>
                    
                )
            })
        }
        </div> 
    )
}