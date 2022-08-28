import { ContactUs, Home } from "../pages";

const routes: RouteType[] = [
	{
		title: "Home",
		path: "/",
		description: "Home Page of Aaveg 2022",
		element: <Home />,
	},
	{
		title: "Contact Us",
		path: "/contact",
		description: "Contact Us about Aaveg 2022",
		element: <ContactUs />,
	},
];

export default routes;
