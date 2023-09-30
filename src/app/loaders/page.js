async function backendApi(){
    let data = await fetch("https://dummyjson.com/users")
    let another =await data.json();
    return another.users;
} 
export default async function Pages(){

 
let users = await backendApi(); 
console.log(users)
    return(
        <div>
        {   
            users.map((item)=>(
                <div>

                <h1>
                Name:{item.firstName}
                </h1>
                {/* <h2>
                    Age:{item.age}
                </h2> */}
                </div>
            ))
        }
        
        </div>
    )
} 