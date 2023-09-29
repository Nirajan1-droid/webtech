
import Image from "next/image"
export default function Imaged(){
    return(
        <div>
            {/* when using the link we need to upload the domain name to the domain: property of image: inside the nextConfig component */}
        <Image src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2063&q=80" width={800} height={500}></Image>
        {/* the height and width effects the size of the image */}
        </div>
    )
}