import ClientSiderenderingAttach from "./clientsideattach";
import modularcss from '@/app/modularcss.module.css'
import another from '@/app/another.module.css'
async function productList(){
let data=    await fetch("https://dummyjson.com/products")
    data = await data.json();
    return data.products;
}

export default async function Page(){
    let products = await productList();
    console.log(products);
    
    return(
        <>
        <h1 className={another.main}>roduct List rendering in server side</h1>
        {
            products.map((item)=>(
                <div className={modularcss.main}>Name:{item.title}
                <ClientSiderenderingAttach price={item.price}/>
                </div>
                ))
            }
        </>
    )
}