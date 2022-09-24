import React from "react";
import { ListLayout } from "../../components";

const eventClusters = [
	{
		text: "Dance",
		link: "/events/dance",
	},
	{
		text: "Arts",
		link: "/events/arts",
	},
	{
		text: "Music",
		link: "/events/music",
	},
	{
		text: "Fashion",
		link: "/events/fashion",
	},
	{
		text: "Photography",
		link: "/events/photography",
	},
	{
		text: "Dramatics",
		link: "/events/dramatics",
	},
	{
		text: "Telugu Lits",
		link: "/events/telugulits",
	},
	{
		text: "Hindi Lits",
		link: "/events/hindilits",
	},
	{
		text: "Tamil Lits",
		link: "/events/tamillits",
	},
	{
		text: "English Lits",
		link: "/events/englishlits",
	},
	{
		text: "Shrutilaya",
		link: "/events/shrutilaya",
	},
	{
		text: "Gaming",
		link: "/events/gaming",
	},
];

const Events = () => {
	return <ListLayout title="Events" list={eventClusters} />;
};

export default Events;
