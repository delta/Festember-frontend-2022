import React from "react";
import { ListLayout } from "../../components";

const eventClusters = [
	{
		text: "Cluster-1",
		link: "/events/cluster-1",
	},
	{
		text: "Cluster-2",
		link: "/events/cluster-2",
	},
	{
		text: "Cluster-3",
		link: "/events/cluster-3",
	},
	{
		text: "Cluster-4",
		link: "/events/cluster-4",
	},
	{
		text: "Cluster-5",
		link: "/events/cluster-5",
	},
	{
		text: "Cluster-6",
		link: "/events/cluster-6",
	},
	{
		text: "Cluster-7",
		link: "/events/cluster-7",
	},
	{
		text: "Cluster-8",
		link: "/events/cluster-8",
	},
];

const Events = () => {
	return <ListLayout title="Events" list={eventClusters} />;
};

export default Events;
