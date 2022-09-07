import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Landing = () => {
	const navigate = useNavigate();
	useEffect(() => {
		localStorage.setItem("chakra-ui-color-mode", "dark");
	}, []);
	return (
		<>
			<div className="title-box">
				<div className="title-prefix">Nit Trichy&apos;s</div>
				<div className="title">Festember</div>
				<div className="title-suffix">The Sunken Paradise</div>
				<button
					className="register-button"
					type="button"
					onClick={() => navigate("/register")}
				>
					Register
				</button>
			</div>
		</>
	);
};
export default Landing;
