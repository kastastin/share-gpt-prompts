"use client";

// SSR - Server Side Rendering

const Page = async ({ params }) => {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.id}`,
		{ cache: "no-store" }
	);
	const data = await res.json();

	return (
		<div>
			<h1>{data.title}</h1>
			<p>{data.body}</p>
		</div>
	);
};

export default Page;
