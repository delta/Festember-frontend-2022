import React from "react";
import routes from "./routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NotFoundPage } from "../pages";
import { AppLayout, Page } from "../components";

const Router = () => {
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
