import { ContactUs, Sponsors, Homepage, Register, Login } from "../pages";
import React from "react";

const routes: RouteType[] = [
	{
		title: "Home",
		path: "/",
		description: "Home Page of Festember 2022",
		element: <Homepage />,
	},
	{
		title: "Contact Us",
		path: "/contact",
		description: "Contact Us about Festember 2022",
		element: <ContactUs />,
	},
	{
		title: "Sponsors",
		path: "/sponsors",
		description: "Sponsors of Festember 2022",
		element: <Sponsors />,
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
];

export default routes;
