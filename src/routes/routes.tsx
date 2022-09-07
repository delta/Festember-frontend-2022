import { Homepage, Register, Login, Sponsors } from "../pages";
import React from "react";

const routes: RouteType[] = [
	{
		title: "Home",
		path: "/",
		description: "Home Page of Festember 2022",
		element: <Homepage />,
	},
	{
		title: "Register",
		path: "/register",
		description: "Register for Festember 2022",
		element: <Register />,
	},
	{
		title: "Login",
		path: "/login",
		description: "Login to Festember 2022",
		element: <Login />,
	},
	{
		title: "Sponsors",
		path: "/sponsors",
		description: "Sponsors of Festember 2022",
		element: <Sponsors />,
	},
];

export default routes;
