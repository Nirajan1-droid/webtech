"use client"
import { useEffect, useState } from "react"
export default function Page(){
    const [product,setProduct]= useState([]);//initial value is empty array


 //yesari api bata data fetch garne
    //callback function
    const functionforuseeffect = async()=>{
        let data =  await fetch("https://dummyjson.com/products");
        data =await data.json();
        console.log(data);
        setProduct(data.products)

    }
    useEffect(()=>{
        functionforuseeffect();
    },[])//blank array passed :calls useEffect only reload



    return (
        <table>
          <h1>CLIENT CALLING</h1>
        <tbody>
            {/* tbody must need to be written for the nextjs */}
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>

        </tr>
       
        {
            product.map((items)=>(
                <tr>
                    <td>{items.title}</td>
                    <td>{items.price}</td>
                    <td>{items.description}</td>
                </tr>
            ))
        }
        </tbody>
      </table>
      
      
    )
}