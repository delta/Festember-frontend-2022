import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";
import "./styles.css";
const Landing = () => {
	const navigate = useNavigate();
	const { isLoggedIn } = useContext(userContext);
	useEffect(() => {
		localStorage.setItem("chakra-ui-color-mode", "dark");
	}, []);
	return (
		<>
			<div className="title-box">
				<div className="title-prefix">Nit Trichy&apos;s</div>
				<div className="title">Festember</div>
				<div className="title-suffix">The Sunken Paradise</div>
				{!isLoggedIn && (
					<button
						className="register-button"
						type="button"
						onClick={() => navigate("/register")}
					>
						Register
					</button>
				)}
			</div>
		</>
	);
};
export default Landing;
