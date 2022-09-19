import React, { createContext, useCallback, useState, useEffect } from "react";
import { config } from "../../config";

interface ChildrenProps {
	children: React.ReactNode;
}

export const userContext = createContext<any>(null);

const UserContextProvider: React.FC<ChildrenProps> = ({ children }) => {
	const [userID, setuserID] = useState<number>();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	const isAuth = useCallback(() => {
		setLoading(true);
		fetch(`${config.backendOrigin}/user/details`, {
			method: "GET",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((response) => {
				if (response.status_code === 401) {
					setIsLoggedIn(false);
				} else {
					setIsLoggedIn(true);
				}
				setLoading(false);
			})
			.catch((e) => {
				console.log(e);
				setLoading(false);
			});
	}, [userID]);

	useEffect(() => {
		isAuth();
	}, [isAuth]);

	return (
		<userContext.Provider
			value={{
				setIsLoggedIn,
				setuserID,
				isLoggedIn,
				loading,
				userID,
			}}
		>
			{children}
		</userContext.Provider>
	);
};

export default UserContextProvider;
