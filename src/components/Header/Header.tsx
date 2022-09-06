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
} from "@chakra-ui/react";
import { ChevronUpIcon, CloseIcon } from "@chakra-ui/icons";
import { BrowserView, MobileView } from "react-device-detect";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../index";

import styles from "./styles.module.css";

const Header = ({ isOpen, onClose, onOpen, onToggle }: any) => {
	const menuToggleSVG = "../../../public/Assets/Images/";
	const festemberLogoSVG = "../../../public/Assets/Images/festember_logo.svg";
	const navigate = useNavigate();
	return (
		<Box className={styles.gradient}>
			<MobileView>
				<Flex align="center" justifyContent="space-around" h="20em">
					<Box className={styles.menuBar} mr={5} onClick={onOpen}>
						<Image
							src={
								isOpen
									? menuToggleSVG + "menu_toggle.svg"
									: menuToggleSVG + "menu.svg"
							}
							alt="Festember"
						/>
					</Box>
					<Box className={styles.festemberLogo}>
						<Image src={festemberLogoSVG} alt="Festember" />
					</Box>
					<Drawer
						isOpen={isOpen}
						placement="left"
						onClose={onClose}
						size="full"
					>
						<DrawerOverlay maxH="85vh" mt="9.4vh" />
						<DrawerContent maxH="85vh" mt="9.6vh" bg="#fff0">
							<Navbar />
						</DrawerContent>
					</Drawer>
				</Flex>
			</MobileView>
			<BrowserView>
				<Flex position="relative" width="100%">
					<Box className={styles.festemberLogo}>
						<Image src={festemberLogoSVG} alt="Festember" />
					</Box>
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
						<SlideFade in={isOpen} reverse={true}>
							<Navbar />
						</SlideFade>
					</Center>
				</Flex>
			</BrowserView>
			<Button bg="#79E2FB" onClick={() => navigate("/login")}>
				LOGIN
			</Button>
		</Box>
	);
};

export default Header;
