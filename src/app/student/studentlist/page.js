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

export async function generateStaticParams(props){
let users = await props.params.studentlist;
    return users.map(items({
        studentlist:items.params.toString()
    }))   
}