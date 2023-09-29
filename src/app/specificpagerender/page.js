"use client"
import Script from "next/script";
export default function Specific(){

    return(
<>
<Script src="/location.js"
onLoad={()=>alert("file also loaded acknowledgment in specifi page sent from page.js:)")}
/>
</>

    )
}