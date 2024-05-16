import { createBrowserRouter } from "react-router-dom";
import ClientMainLayouts from "../layouts/ClientMainLayouts";
import Home from "../pages/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <ClientMainLayouts />,
		children: [{ path: "/", element: <Home /> }],
	},
]);
