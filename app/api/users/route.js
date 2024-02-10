// http://localhost:3000/api/users

export async function GET(request) {
	// Handle GET request for /api/users
	const users = [
		{ id: 1, name: "Bob" },
		{ id: 2, name: "Tom" },
		{ id: 3, name: "Ben" },
	];

	// Send users as an response
	return new Response(JSON.stringify(users));
}
