import React from "react";
import { ListLayout } from "../../components";

const issues = [
	{
		text: "Issue-1",
		link: "/Assets/Documents/wildfire-issue-1.pdf",
	},
	{
		text: "Issue-2",
		link: "/Assets/Documents/wildfire-issue-2.pdf",
	},
	{
		text: "Issue-3",
		link: "/Assets/Documents/wildfire-issue-3.pdf",
	},
];

const Wildfire = () => {
	return <ListLayout title="Wildfire" list={issues} />;
};

export default Wildfire;
