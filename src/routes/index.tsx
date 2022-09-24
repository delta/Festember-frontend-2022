import React from "react";
import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages";
import { AppLayout, Page, Timeline } from "../components";
import { useMediaQuery } from "@chakra-ui/react";

const Router = () => {
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
	if (isSmallerThan600) {
		routes.push({
			path: "/timeline",
			title: "Timeline",
			description: "Timeline of Festember '22",
			element: <Timeline />,
		});
	}
	return (
		<BrowserRouter>
			<AppLayout>
				<Routes>
					{routes.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={
									<Page
										title={"Festember '22 | " + route.title}
										description={route.description}
									>
										{route.element}
									</Page>
								}
							/>
						);
					})}
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</AppLayout>
		</BrowserRouter>
	);
};

export default Router;
