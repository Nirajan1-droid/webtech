import { user } from '../utilities/db'
import { NextResponse } from "next/server"
export function GET() {
    let data = user;
    return NextResponse.json(data, { status: 200 });
}

export async function POST(request) {
    let response = await request.json();
    if (!response.name) {

        return NextResponse.json({ result: "no data " , success:false}, { status: 321 })
    }
    return NextResponse.json({ result: "data available", success:true },{ status: 400 })
}
//401:unauthorized
//500:internal error
//301:moved permanently
//302:found
//404:not found
//201:created
//202:accepted
//203:non authoritative information
