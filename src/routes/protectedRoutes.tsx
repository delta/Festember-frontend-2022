import { Profile } from "../pages";
import React from "react";

const protectedRoutes: RouteType[] = [
    {
		title: "Profile",
		path: "/profile",
		description: "Profile Page of Festember 2022",
		element: <Profile />,
	},
];

export default protectedRoutes;
