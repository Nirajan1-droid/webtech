import Link from "next/link";
import Userss from "../../../services/userss"

export default async function Page(){
let data  = Userss();
const users = await data;
console.log(users);
    return(
<div>
{
    users.map((items)=>(
        <div key={items.id}>
            {/* key is required for staticsite generation */}
        <Link href={`/staticsitegen/${items.id}`} >{items.firstName}</Link>
        </div>
    ))
}
</div>

    )
}