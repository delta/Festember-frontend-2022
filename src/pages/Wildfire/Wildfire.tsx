import React from "react";
import { ListLayout } from "../../components";

const issues = [
	{
		text: "Issue-1",
		link: "/wildfire/issue-1",
	},
	{
		text: "Issue-2",
		link: "/wildfire/issue-2",
	},
	{
		text: "Issue-3",
		link: "/wildfire/issue-3",
	},
];

const Wildfire = () => {
	return <ListLayout title="Wildfire" list={issues} />;
};

export default Wildfire;
