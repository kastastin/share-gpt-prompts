"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

import Profile from "@components/Profile";

const MyProfile = () => {
	const { data: session } = useSession();

	const [myPosts, setMyPosts] = useState([]);

	const fetchPosts = async () => {
		const response = await fetch(`/api/users/${session?.user.id}/posts`);
		const data = await response.json();

		setMyPosts(data);
	};

	useEffect(() => {
		if (session?.user.id) fetchPosts();
	}, [session]);

	const handleEdit = (post) => {};

	const handleDelete = async (post) => {};

	return (
		<Profile
			name="My"
			desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
			data={myPosts}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	);
};

export default MyProfile;
