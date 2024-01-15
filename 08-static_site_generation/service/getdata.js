export default async function GetData(){
    const fetchd= await fetch('https://dummyjson.com/carts');
    return (
        fetchd.json()
        )
}
