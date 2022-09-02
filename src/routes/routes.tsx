import { ContactUs, Sponsors, Homepage } from "../pages";
import React from "react";
import EventsPage from "../pages/EventsPage/EventsPage";

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
		title: "EventPage",
		path: "/events",
		description: "Events Page",
		element: <EventsPage />
	}
];

export default routes;
