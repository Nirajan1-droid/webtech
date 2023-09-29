import { Roboto } from "next/font/google";
const roboto = Roboto({
    weight:'100',
    subsets:['latin'],
    display:'swap'
})
export default function Font(){
    return(
        <>
        {/* this reduces the network request and the font is also optimized */}
        <h1 className={roboto.className}>font with nextjs</h1>
        </>
    )
}