import routes from "../../routes/routes";
import { Box, Button, Center, Flex, Link } from "@chakra-ui/react";
import { BrowserView, MobileView } from "react-device-detect";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
		<>
			<MobileView>
				<Flex flexDirection="column" align="center" mt={10}>
					{routes.map((route) => {
						return (
							<Link href={route.path}>
								<Center
                                    position="relative"
                                    fontSize="2xl"
                                    width="12em"
                                    className={styles.button}
								>
									{route.title}
								</Center>
							</Link>
						);
					})}
				</Flex>
			</MobileView>

			<BrowserView>
				<Center mt={1}>
					{routes.map((route, key) => {
						return (
							<Link href={route.path}>
								<Flex
									fontSize="xl"
									textTransform="uppercase"
									color="white"
								>
									{key != 0 ? (
										<Box ml={5} mr={5} className={styles.separator}>
											|
										</Box>
									) : null}
									{route.title}
								</Flex>
							</Link>
						);
					})}
				</Center>
			</BrowserView>
		</>
  );
}

export default Navbar;