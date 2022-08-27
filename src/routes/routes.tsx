import React from "react";
import {
	Home,
} from "../pages";
import EventsPage from "../pages/EventsPage/EventsPage";

const routes: RouteType[] = [
	{
		title: "Home",
		path: "/",
		description: "Home Page of Aaveg 2022",
		element: <Home />,
	},
	{
		title: "EventPage",
		path: "/events",
		description: "Events Page",
		element: <EventsPage />
	}
];

export default routes;
