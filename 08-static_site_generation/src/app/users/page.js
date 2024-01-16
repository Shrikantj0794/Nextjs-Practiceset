import getData from "../../../service/getdata";

export default async function Page(){
    const getDataList = getData();
    const carts = await getDataList; 
    
    return(
        <div>
            <h1>Users page</h1>
            {
                carts.map((cart)=>{
                    return(
                        <h3>Name: {cart.discountedTotal}</h3>
                    )
                })
            }
        </div>
    )
}