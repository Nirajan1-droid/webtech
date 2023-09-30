import Userss from "../../../../services/userss"


export default async function fileName(props){
    let data  = await Userss();//[terry,obj2,so on]
    let branchid = props.params.filename;//users/1 1 is passsed to [filename] so to acess the 1 we need props.params.filename
    const userData = data[branchid-1];//we need to acess terry but the id of the terry is 1. so posiiton of 1 in array is 0.so subtracting 1 everytime to access the data from the array of data

    const users = await data;
    
    console.log(users);
    
    return(
        <div>
            <h1>
                {userData.id}
                {userData.firstName}
                {userData.address.city}
                </h1>
        </div>
    )


} 

//now static generation generates ready to show dynamic pages which the converts to static web pages.

export async function generateStaticParams(){
    const getUserList = Userss();
    const users = await getUserList;
    return users.map(items=>({
        filename:items.id.toString()
    }))   
}