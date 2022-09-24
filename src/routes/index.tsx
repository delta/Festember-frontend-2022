import React, { useContext } from "react";
import routes from "./routes";
import protectedRoutes from "./protectedRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages";
import { AppLayout } from "../components";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import { userContext } from "../contexts/UserContext";
import { config } from "../../config";

const Router = () => {
	const { isLoggedIn } = useContext(userContext);
	return (
		<BrowserRouter basename={config.basePath}>
			<AppLayout>
				<Routes>
					{routes.map((route) => {
						return (
							<Route
								key={route.path}
								path={route.path}
								element={route.element}
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
