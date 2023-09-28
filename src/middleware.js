import { NextResponse } from "next/server"; //url redirecting

export function middleware(request){
    console.log("middleware executed",request.nextUrl.pathname);//output /login
    if(request.nextUrl.pathname != "/login"){

        //to redirect the page from /login to /student
        return NextResponse.redirect(new URL("/login",request.url))//request.url retrives the request from the config compoennt matcher syntax
                                        //redirect to /login on the links exported by config component matcher syntax
    }
}

export const config = {
    //config nai hunuparyo
    matcher : ["/student/path","/student"]///student/path and /student inside the array redirects to the /login page
}