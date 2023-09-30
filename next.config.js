/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return[
                {
                    source:"/users",
                    destination:"/",
                    permanent:false
                },
                {
                    source:"/staticsitegen/:filename",
                    destination:"/",
                    permanent:false
                }
            ]
        },
    images:{
        domains:['images.unsplash.com']
    }
    // output:"export"//responsible to export the static html file to the out folder
    
}

module.exports = nextConfig;
