import Link from "next/link"

export default function Student()
{

    return(
        <>
        student list
        <ul>
            <li>
                <Link href='student/1/222'>

                nirajan
                </Link>
                </li>
            <li>
                <Link href='student/2/222'>

                guruji
                
                </Link>
                </li>
        </ul>
        </>
    )
}
