import { Events, EventsPage, Workshops } from "../pages";
import React from "react";

const protectedRoutes: RouteType[] = [
	{
		title: "Workshops Page",
		path: "/workshops",
		description: "Workshops Page of Festember 2022",
		element: <Workshops />,
	},
];

export default protectedRoutes;
