// import routes from "../../routes/routes";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { BrowserView, MobileView } from "react-device-detect";
import { config } from "../../../config";
import styles from "./styles.module.css";
import { Link as RouterLink } from "react-router-dom";
import { isMobile } from "react-device-detect";

const routes = [
	{ name: "Dashboard", path: "/profile" },
	{ name: "Events", path: "/events" },
	{ name: "Workshops", path: "/workshops" },
	{ name: "GL", path: "/guestlectures" },
	{ name: "Informals", path: "/informals" },
	{ name: "Wildfire", path: "/wildfire" },
	{ name: "Hospitality", path: "/hospitality" },
	{ name: "Sponsors", path: "/sponsors" },
	{ name: "Leaderboard", path: "/leaderboard" },
	{ name: "Download APK", path: "https://play.google.com/store/apps/details?id=edu.nitt.delta&pli=1" },
];

if (isMobile) {
	routes.push({ name: "Timeline", path: "/timeline" });
}

const Navbar = ({ onClose }: any) => {
	return (
		<>
			<MobileView>
				<Flex
					flexDirection="column"
					align="center"
					mt={10}
					className={styles.mobileNavbar}
					style={{ fontFamily: "Poppins" }}
				>
					{routes.map((route) => {
						return (
							<Link
								as={
									route.path.startsWith("/#") ||
									route.path.startsWith("https") ||
									route.path === "/sponsors"
										? undefined
										: RouterLink
								}
								to={`${route.path}`}
								href={
									route.path.startsWith("/#") ||
									route.path.startsWith("https") ||
									route.path === "/sponsors"
										? `${
												route.path.startsWith("https")
													? ""
													: config.basePath
										  }${route.path}`
										: undefined
								}
								key={route.name}
								target={
									route.path.startsWith("https") ? "_blank" : undefined
								}
							>
								<Center
									position="relative"
									fontSize="2xl"
									width="12em"
									className={styles.button}
									onClick={onClose}
								>
									{route.name}
								</Center>
							</Link>
						);
					})}
				</Flex>
			</MobileView>
			<BrowserView>
				<Center mt={1} style={{ fontFamily: "Poppins" }}>
					{routes.map((route, key) => {
						return (
							<Link
								as={
									route.path.startsWith("/#") ||
									route.path.startsWith("https") ||
									route.path === "/sponsors"
										? undefined
										: RouterLink
								}
								to={`${route.path}`}
								href={
									route.path.startsWith("/#") ||
									route.path.startsWith("https") ||
									route.path === "/sponsors"
										? `${
												route.path.startsWith("https")
													? ""
													: config.basePath
										  }${route.path}`
										: undefined
								}
								_hover={{ border: "none" }}
								key={route.name}
								target={
									route.path.startsWith("https") ? "_blank" : undefined
								}
							>
								<Flex
									fontSize="xl"
									textTransform="uppercase"
									color="white"
								>
									{key != 0 ? (
										<Box
											ml={5}
											mr={5}
											pl={1}
											pr={1}
											className={styles.separator}
										>
											|
										</Box>
									) : null}
									<Text
										_hover={{
											background:
												"linear-gradient(179deg, #FFFFFF 14.23%, #3AD4F8 99.14%)",
											WebkitBackgroundClip: "text",
											WebkitTextFillColor: "transparent",
											backgroundClip: "text",
											fontWeight: "bold",
										}}
										className={styles.navbarText}
									>
										{route.name}
									</Text>
								</Flex>
							</Link>
						);
					})}
				</Center>
			</BrowserView>
		</>
	);
};

export default Navbar;
