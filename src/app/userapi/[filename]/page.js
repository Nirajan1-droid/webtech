async function getUserss(name) {

    let data = await fetch(`http://localhost:3000/api/users/${name}`);
    data = await data.json();
    return data.result;
}
export default async function Pagef({ params }) {
    // const returnedval = params.filename;//get the name
    const user = await getUserss(params.filename);
     console.log(user);
     const jsonData = JSON.stringify(user, null, 0);

    return (
        <div>

            <div>
                <h1>

            {jsonData}
                </h1>
                <div>
  {user.map((item, index) => (
    <div key={index}>
      <div>Name: {item.name}</div>
      <div>Age: {item.age}</div>
      <div>Email: {item.email}</div>
    </div>
  ))}
</div>
                
            </div>

        </div>
    )
}