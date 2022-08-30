import { ContactUs, Home, Sponsors } from "../pages";

const routes: RouteType[] = [
	{
		title: "Home",
		path: "/",
		description: "Home Page of Festember 2022",
		element: <Home />,
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
