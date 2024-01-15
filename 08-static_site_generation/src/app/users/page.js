import GetData from "../../../service/getdata"

export default async function Page(){
    const getDataList = GetData();
    const carts = await getDataList;  
    return(
        <div>
            <h1>Users page</h1>
            {
                carts.map((items)=>{
                    return(
                        <h3>Name: {items.discountedTotal}</h3>
                    )
                })
            }
        </div>
    )
}