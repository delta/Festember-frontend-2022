import {
	Box,
	Button,
	Flex,
	Image,
	Fade,
	Center,
	Drawer,
	DrawerContent,
	DrawerOverlay,
	SlideFade,
	useMediaQuery,
} from "@chakra-ui/react";
import { ChevronUpIcon, CloseIcon } from "@chakra-ui/icons";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../contexts/UserContext";
import festemberLogoSVG from "../../../public/Assets/Images/festember_logo.svg";
import menuToggleSVGClosed from "../../../public/Assets/Images/menu_toggle.svg";
import menuToggleSVGOpen from "../../../public/Assets/Images/menu.svg";
// import nittLogo from "../../../public/Assets/Images/NITT.png";
import { Navbar } from "../index";

import styles from "./styles.module.css";
import { config } from "../../../config";
import { useContext } from "react";

const Header = ({ isOpen, onClose, onOpen, onToggle }: any) => {
	const { isLoggedIn, setIsLoggedIn } = useContext(userContext);
	const navigate = useNavigate();
	const [isSmallerThan1200] = useMediaQuery("(max-width: 1200px)");

	const handleLogout = () => {
		fetch(`${config.backendOrigin}/auth/logout`, {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.status_code === 200) {
					setIsLoggedIn(false);
					navigate("/login");
				} else {
					console.log(data);
				}
			})
			.catch((err) => console.log(err));
	};

	return (
		<Box className={styles.gradient}>
			{isSmallerThan1200 ? (
				<Flex align="center" justifyContent="space-around" h="20em">
					<Box className={styles.menuBar} mr={5} onClick={onOpen}>
						<Image
							src={isOpen ? menuToggleSVGClosed : menuToggleSVGOpen}
							alt="Festember"
						/>
					</Box>
					<Box className={styles.festemberLogo}>
						<Image src={festemberLogoSVG} alt="Festember" />
					</Box>
					{/* <Box className={styles.nittLogo}>
					<Image src={nittLogo} alt="NITT" />
				</Box> */}
					<Drawer
						isOpen={isOpen}
						placement="left"
						onClose={onClose}
						size="full"
					>
						<DrawerOverlay maxH="85vh" mt="9.4vh" />
						<DrawerContent maxH="85vh" mt="9.6vh" bg="#fff0">
							<Navbar onClose={onClose} />
						</DrawerContent>
					</Drawer>
				</Flex>
			) : (
				<Flex width="100%">
					<Box className={styles.festemberLogo}>
						<Image src={festemberLogoSVG} alt="Festember" />
					</Box>
					{/* <Box className={styles.nittLogoBrowser}>
						<Image src={nittLogo} alt="NITT" />
					</Box> */}
					<Center>
						<Button
							color="white"
							variant="ghost"
							ml={3}
							mr={3}
							onClick={onToggle}
							style={{
								background: "transparent",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							{!isOpen ? (
								<ChevronUpIcon boxSize="50px" />
							) : (
								<CloseIcon boxSize="20px" ml="15px" />
							)}
						</Button>
						<Box visibility={isOpen ? "visible" : "hidden"}>
							<SlideFade in={isOpen} reverse={true}>
								<Navbar />
							</SlideFade>
						</Box>
					</Center>
				</Flex>
			)}
			{!isLoggedIn &&
				window.location.pathname !== "/login" &&
				window.location.pathname !== "/register" && (
					<Button bg="#79E2FB" onClick={() => navigate("/login")}>
						LOGIN
					</Button>
				)}
			{isLoggedIn && (
				<Button bg="#79E2FB" onClick={handleLogout}>
					LOGOUT
				</Button>
			)}
		</Box>
	);
};

export default Header;
