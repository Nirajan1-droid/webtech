import Link from "next/link";

async function getUserss(){

    let data = await fetch("http://localhost:3000/api/users")
    data = await data.json();
    return data;
}
export default async function Page(){
let users =  await getUserss();

    return(
<div>
{
    users.map((item)=>(
        <div  >   
            <Link href={`/userapi/${item.name}`}>{item.name}</Link>
        {item.name}
        </div>
    ))
}
</div>
    )
}