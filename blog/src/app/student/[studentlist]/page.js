"use client"
export default function Studentlist({params})
{
    console.log(params);

    return(
        <>
        student list
            <br/>
            <br/>

        <h1>
            
        {params.studentlist}
            
        </h1>
        
        </>
    )
}
