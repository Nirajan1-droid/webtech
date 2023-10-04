// "use client"
export default function Studentlist({params})
{
    console.log(params);

    return(
        <>
        student list
            <br/>
            <br/>

        <h1>
            {/* tei link lai yaha print gariyeko xa through parmas */}
        {params.studentlist}+2
            
        </h1>
        
        </>
    )
}
 
// export async function generateStaticParams(props){
// let users = await props.params.studentlist;
//     return users.map(items({
//         studentlist:items.params.toString()
//     }))   
// }
//if we want to use the generateStaticParams then we can't use the sublink in the realtime data rendering.
//the generateStaticParams requires the configuration output:true in the next.config.js file and it executes itself at the time of build
