"use client";
import { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { API_BASE_URL } from "./config/constants";

export default function Home() {
	const [name, setName] = useState("nira");
	// console.log(id);
	const anotherarray = (items, num) => {
		// alert(items+"value is"+num);

		setName("nirajan das");
	};
	const router = useRouter();
	const InnerComp = () => {
		return(

			<div>another inner component</div>
			) 
	};
	return (
		<main className={styles.main}>
			<div>

			{
				process.env.NODE_ENV=="development"?
				<h1>you are in development mode</h1>
				:
				<h2>you are in the production mode</h2>
			}
			<h1>{API_BASE_URL}</h1>
			<DynamicRouting />
			<h1>hello</h1>
			<User user="nirajan" />
			<button onClick={() => anotherarray()}>{name} </button>
			<Link href="/login">Go to login page</Link>
			{InnerComp()}
			{/* //this is ineffecient method to call the component as the */}
			{/* recolliation algorithm may be violated using this. */}
			<button onClick={() => useRouter().push("/login")}>
				routing functionality using the useRouter
			</button>
			</div>
		</main>
	);
}

const DynamicRouting = () => {
	const [id, setId] = useState("1");
	const [sid, setsId] = useState();
	const handleId = (e) => {
		setId(e.target.value);
		console.log(e.target.value);
	};

	const handleinnerId = (e) => {
		setsId(e.target.value);
		console.log(e.target.value);
	};
	console.log(process.env.NODE_ENV)
	return (
		<div>
			 

			<h1>Dynamic routing</h1>
			<p>
				dynamic routing refers to the routing on the basis of the id of the
				user.we can\t create every single page for each of the link so to{" "}
				<br></br> route page on 
			</p>

			<h6>TRY</h6>
			<input
				type="text"
				placeholder="dynamic sublink link /2 for /student/$sublink"
				id="valueofsublink"
				value={id}
				onChange={handleId}
			></input>

			<Link href={"/student/" + `${id}`}>click here for the one sub page</Link>
			<br />
			<input
				type="text"
				placeholder="dynamic sublink link /subpagevalue/2 for /student/$sublink"
				id="valueofinnersublink"
				value={sid}
				onChange={handleinnerId}
			></input>
			<Link href={"/student/" + `${id}/` + `${sid}`}>
				click here for the inner sub page
			</Link>
		</div>
	);
};
const User = (props) => {
	return (
		<div>
			h2
			<h1>the user name is {props.user}</h1>
		</div>
	);
};

const ConditionalLayout = ()=>{
	return(
		<div>
		<h1>The conditional layout</h1>
		<p>we use the usePathName from next/navigation and storing that package as the variable then used the conditional operation !== or === to check (if)?(otherwise implement this):(if implement this) and inside of them the html operaiton is specified along iwth the la</p>
		</div>
	);

}
