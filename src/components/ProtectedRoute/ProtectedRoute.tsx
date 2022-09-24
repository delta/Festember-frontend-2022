import React from "react";
import { useNavigate } from "react-router-dom";

interface ChildrenProps {
	isLoggedIn: boolean;
	children: React.ReactNode;
}

const ProtectedRoute: React.FC<ChildrenProps> = ({ isLoggedIn, children }) => {
	const navigate = useNavigate();
	if (!isLoggedIn) navigate("/login", { state: { from: "ProtectedRoute" } });

	return <>{children}</>;
};

export default ProtectedRoute;
