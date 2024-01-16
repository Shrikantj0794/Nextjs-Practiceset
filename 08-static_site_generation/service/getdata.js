export default async function getData(){
    const fetchd= await fetch('https://dummyjson.com/carts');
    return fetchd.json()

}
