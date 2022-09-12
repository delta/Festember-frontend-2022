import {
	Homepage,
	Register,
	Login,
	Sponsors,
	Events,
	Wildfire,
	EventsPage
} from "../pages";
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
	{
		title: "Events",
		path: "/events",
		description: "Event Clusters of Festember 2022",
		element: <Events />,
	},
	{
		title: "Events Page",
		path: "/eventspage",
		description: 'Events Page of Festember 2022',
		element: <EventsPage />
	},
	{
		title: "Wildfire",
		path: "/wildfire",
		description: "Wildfire Page of Festember 2022",
		element: <Wildfire />,
	},
];

export default routes;
