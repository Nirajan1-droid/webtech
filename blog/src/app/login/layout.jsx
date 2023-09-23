"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
	const pathname = usePathname();
	return (
		<>
			{" "}
			{pathname !== "/login/subpage" ? (
				<ul>
					{" "}
					<li>
						{" "}
						<Link href={"/login"}>LoginPage</Link>{" "}
					</li>{" "}
					<li>
						{" "}
						<Link href={"/login/subpage"}>subpage</Link>{" "}
					</li>{" "}
				</ul>
			) : (
				<div>
					{" "}
					<ul>##################3header for subpage############</ul>{" "}
				</div>
			)}{" "}
			{children}{" "}
		</>
	);
}
