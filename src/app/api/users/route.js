import { user } from '../utilities/db'
import { NextResponse } from "next/server"
import writeFile from 'fs/promises'
// export function GET() {
//     let data = user;
//     return NextResponse.json(data, { status: 200 });
// }

// export async function POST(request) {
//     let response = await request.json();
//     if (!response.name) {

//         return NextResponse.json({ result: "no data ", success: false }, { status: 321 })
//     }
//     return NextResponse.json({ result: "data available", success: true }, { status: 400 })
// }



//401:unauthorized
//500:internal error
//301:moved permanently
//302:found
//404:not found
//201:created
//202:accepted
//203:non authoritative information


export default async function POST(req) {
    const data = await req.formData();//t
    const file = data.get('file');
    if (!file) {
        return NextResponse.json({ "message": "no image found", sucess: false })
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = `./public/${file.name}`;
    await writeFile(path, buffer);
    return NextResponse.json({ "message": "file uploaded", sucess: true })


}