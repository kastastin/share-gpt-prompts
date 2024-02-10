"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
	const isUserLoggedIn = true;

	const [providers, setProviders] = useState(null);
	const [toggleDropdown, setToggleDropdown] = useState(false);

	useEffect(() => {
		(async () => {
			const response = await getProviders();
			setProviders(response);
		})();
	}, []);

	return (
		<nav className="w-full flex-between mb-16 pt-3">
			<Link href="/" className="flex flex-center gap-2">
				<Image
					src="/assets/images/logo.svg"
					alt="Logo"
					width={30}
					height={30}
					className="object-contain"
				/>
				<p className="logo_text">GPT Prompts</p>
			</Link>

			{/* Desktop navigation */}
			<div className="sm:flex hidden">
				{isUserLoggedIn ? (
					<div className="flex gap-3 md:gap-5">
						<Link href="/create-prompt" className="black_btn">
							Create Post
						</Link>

						<button type="button" onClick={signOut} className="outline_btn">
							Sign Out
						</button>

						<Link href="/profile">
							<Image
								src="/assets/images/logo.svg"
								alt="Profile"
								width={37}
								height={37}
								className="rounded-full"
							/>
						</Link>
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className="black_btn"
								>
									Sign In
								</button>
							))}
					</>
				)}
			</div>

			{/* Mobile navigation */}
			<div className="sm:hidden flex relative">
				{isUserLoggedIn ? (
					<div className="flex">
						<Image
							src="/assets/images/logo.svg"
							alt="Profile"
							width={37}
							height={37}
							onClick={() => setToggleDropdown((prevState) => !prevState)}
							className="rounded-full"
						/>

						{toggleDropdown && (
							<div className="dropdown">
								<Link
									href="/profile"
									onClick={() => setToggleDropdown(false)}
									className="dropdown_link"
								>
									My Profile
								</Link>
								<Link
									href="/create-prompt"
									onClick={() => setToggleDropdown(false)}
									className="dropdown_link"
								>
									Create Prompt
								</Link>

								<button
									type="button"
									onClick={() => {
										setToggleDropdown(false);
										signOut();
									}}
									className="w-full mt-5 black_btn"
								>
									Sign Out
								</button>
							</div>
						)}
					</div>
				) : (
					<>
						{providers &&
							Object.values(providers).map((provider) => (
								<button
									type="button"
									key={provider.name}
									onClick={() => signIn(provider.id)}
									className="black_btn"
								>
									Sign In
								</button>
							))}
					</>
				)}
			</div>
		</nav>
	);
};

export default Nav;
