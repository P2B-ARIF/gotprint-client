import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/client_c/Footer";
import Header from "../components/client_c/Home/Header";

const ClientMainLayouts = () => {
	return (
		<main>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default ClientMainLayouts;
