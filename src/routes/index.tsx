import React, { useContext } from "react";
import routes from "./routes";
import protectedRoutes from "./protectedRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages";
import { AppLayout, Page, Timeline, ProtectedRoute } from "../components";
import { useMediaQuery } from "@chakra-ui/react";
import { userContext } from "../contexts/UserContext";
import { config } from "../../config";

const Router = () => {
	const { isLoggedIn } = useContext(userContext);
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
									<ProtectedRoute isLoggedIn={isLoggedIn}>
										{route.element}
									</ProtectedRoute>
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
									<ProtectedRoute isLoggedIn={isLoggedIn}>
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
