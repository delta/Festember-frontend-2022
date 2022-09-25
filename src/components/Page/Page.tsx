import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const Page = (props: {
	title: string;
	description: string;
	children: React.ReactNode;
}) => {
	return (
		<>
			<Helmet>
				<title>{props.title}</title>
				<meta name="description" content={props.description} />
			</Helmet>
			{props.children}
		</>
	);
};

export default Page;
