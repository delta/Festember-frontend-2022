import {
	Box,
	Image,
} from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";
import { BrowserView, MobileView } from "react-device-detect";
import "./styles.css";
import nittLogo from "../../../public/Assets/Images/NITT.png";
const Landing = () => {
	const navigate = useNavigate();
	const { isLoggedIn } = useContext(userContext);
	useEffect(() => {
		localStorage.setItem("chakra-ui-color-mode", "dark");
	}, []);
	return (
		<>
			<div className="title-box">
				<MobileView>
					<Box className="nittLogo">
						<Image src={nittLogo} alt="NITT" />
					</Box>
				</MobileView>
				<BrowserView>
					<Box className="nittLogoBrowser">
						<Image src={nittLogo} alt="NITT" />
					</Box>
				</BrowserView>
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
