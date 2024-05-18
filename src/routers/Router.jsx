import { createBrowserRouter } from "react-router-dom";
import ClientMainLayouts from "../layouts/ClientMainLayouts";
import Home from "../pages/Home";
import Info from "../pages/products/acrylic-boards/Info";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <ClientMainLayouts />,
		children: [
			{ path: "/", element: <Home /> },

			// products routes
			{ path: "/products/acrylic-boards/info.html", element: <Info /> },
		],
	},
]);
