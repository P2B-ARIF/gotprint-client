import React from "react";

const Navbar = () => {
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
			<ul className='flex items-center justify-between py-5 font-bold text-sm mx-10'>
				{links.map(link => (
					<li key={link.id}>{link.name}</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
