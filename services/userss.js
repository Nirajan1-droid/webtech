export default async function Userss(){
 

    let data = await fetch("https://dummyjson.com/users")
    data =  await data.json();
    return data.users ;
 

    
}