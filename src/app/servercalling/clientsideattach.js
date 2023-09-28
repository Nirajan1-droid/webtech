"use client"
export default function ClientSiderenderingAttach({price}){
    return(
        <>
        <br/>
        <button  onClick={()=>alert(price)}>from client side</button>
        </>
    )}
    //this is how the client side is used in the server side and the server side exported the property as the prop to the client compoenent]