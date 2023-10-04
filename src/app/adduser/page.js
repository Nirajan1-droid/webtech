"use client"
import { useState } from "react"
import Link from "next/link"
export default function Page(){
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [email,setEmail]=  useState("");
    const addUser = async()=>{
        let response = await fetch("http://localhost:3000/api/users",{
            method:"POST",
            body:JSON.stringify({name,age,email})
        });
        console.log(response.status)
        if(response.status ){
            // alert("no datadd:",response.status);
            alert("no data :"+response.status);
        }
        response = await response.json();
    }
    return (
        <div>
            <input type="text" value={name} placeholder="enter the name" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" value={age} placeholder="enter the age" onChange={(e)=>setAge(e.target.value)}/>
            <input type="text" value={email} placeholder="enter the EMAIL" onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={addUser}>click</button>
        </div>
    )
}
