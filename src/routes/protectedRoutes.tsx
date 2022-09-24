import { Events, EventsPage, Workshops } from "../pages";
import React from "react";

const protectedRoutes: RouteType[] = [
	{
		title: "Events",
		path: "/events",
		description: "Event Clusters of Festember 2022",
		element: <Events />,
	},
	{
		title: "Events Page",
		path: "/events/:cluster",
		description: "Events Page of Festember 2022",
		element: <EventsPage />,
	},
	{
		title: "Workshops Page",
		path: "/workshops",
		description: "Workshops Page of Festember 2022",
		element: <Workshops />,
	},
];

export default protectedRoutes;
