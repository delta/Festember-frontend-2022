import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ChildrenProps {
	isLoggedIn: boolean;
	loading: boolean;
	children: React.ReactNode;
}

const ProtectedRoute: React.FC<ChildrenProps> = ({
	isLoggedIn,
	loading,
	children,
}) => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!isLoggedIn && !loading)
			navigate("/login", { state: { from: "ProtectedRoute" } });
	}, [isLoggedIn, loading]);

	return <>{children}</>;
};

export default ProtectedRoute;
