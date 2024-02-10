"use client";

import { useEffect } from "react";

const error = ({ error, reset }) => {
	useEffect(() => {
		console.log(error);
	}, []);

	return (
		<>
			<div>Something went wrong...</div>
			<button onClick={() => reset()}>Try again</button>
		</>
	);
};

export default error;
