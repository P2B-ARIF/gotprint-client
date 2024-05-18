import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [linkRoute, setLinkRoute] = useState("");

	const links = [
		{ id: 1, path: "/", name: "All Products" },
		{ id: 2, path: "/", name: "Business Cards" },
		{ id: 3, path: "/", name: "Marketing Materials" },
		{ id: 4, path: "/", name: "Signs & Banners" },
		{ id: 5, path: "/", name: "Invitations & Stationery" },
		{ id: 6, path: "/", name: "Sticker & Labels" },
		{ id: 7, path: "/", name: "Gifts & Decor" },
		{ id: 8, path: "/", name: "Apparel" },
		{ id: 9, path: "/", name: "Industry" },
		{ id: 10, path: "/", name: "Services" },
	];
	
	return (
		<nav className='container mx-auto'>
			<ul className='flex items-center justify-between font-bold text-sm mx-10'>
				{links?.map(link => (
					<li
						key={link.id}
						onMouseEnter={() => setLinkRoute(link.name)}
						className='border-b-4 py-4 mb-[1px] border-transparent hover:border-primary transition-all duration-200 ease-linear'
					>
						<Link>{link.name}</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
