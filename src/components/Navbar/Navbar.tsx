// import routes from "../../routes/routes";
import { Box, Center, Flex, Link, Text } from "@chakra-ui/react";
import { BrowserView, MobileView } from "react-device-detect";
import styles from "./styles.module.css";

const routes = [
	{ name: "Home", path: "/#home" },
	{ name: "Events", path: "/events" },
	{ name: "Workshops", path: "/workshops" },
	{ name: "About Us", path: "/#aboutUs" },
	{ name: "Contact Us", path: "/#contactUs" },
	// { name: "Sponsors", path: "/sponsors" },
	{ name: "Wildfire", path: "/wildfire" },
];

const Navbar = ({ onClose }: any) => {
	return (
		<>
			<MobileView>
				<Flex
					flexDirection="column"
					align="center"
					mt={10}
					style={{ fontFamily: "Poppins" }}
				>
					{routes.map((route) => {
						return (
							<Link href={route.path} key={route.name}>
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
								href={route.path}
								_hover={{ border: "none" }}
								key={route.name}
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
