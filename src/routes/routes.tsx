import { ContactUs, Sponsors } from "../pages";
import React from "react";
import Homepage from "../pages/homepage/Homepage";

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
];

export default routes;
