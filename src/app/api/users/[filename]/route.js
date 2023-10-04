import { user } from '../../utilities/db'
import { NextResponse } from "next/server"
export function GET(req, res) {
    //     console.log(res.params.filename)
    // let data  = res.params.filename;
    //     return NextResponse.json(data,{status:200})
    const data = user.filter((item) => item.name == res.params.filename)
    return NextResponse.json(data.length == 0 ? { result: "not data found", sucess: false } : { result: data, sucess: true }, { status: 200 })


}