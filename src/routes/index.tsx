import React, { useContext } from "react";
import routes from "./routes";
import protectedRoutes from "./protectedRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages";
import { AppLayout, Page, Timeline, ProtectedRoute } from "../components";
import { useMediaQuery } from "@chakra-ui/react";
import { userContext } from "../contexts/UserContext";
import { config } from "../../config";
import { isMobile } from "react-device-detect";

const Router = () => {
	const { isLoggedIn, loading } = useContext(userContext);
	if (isMobile) {
		routes.push({
			path: "/timeline",
			title: "Timeline",
			description: "Timeline of Festember '22",
			element: <Timeline />,
		});
	}
	return (
		<BrowserRouter basename={config.basePath}>
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
					{protectedRoutes.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={
									<ProtectedRoute
										isLoggedIn={isLoggedIn}
										loading={loading}
									>
										{route.element}
									</ProtectedRoute>
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
