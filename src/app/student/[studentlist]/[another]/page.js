"use client"
export default function UniqueStudentlist({params})
{
    console.log(params);

    return(
        <>
        student list
            <br/>
            <br/>

        <h1>
            
        {params.another}=you are here in the inner sub page
            
        </h1>
        
        </>
    )
}
