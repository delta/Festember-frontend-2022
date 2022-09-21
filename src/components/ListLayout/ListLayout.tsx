import { Box, Center, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import styles from "./styles.module.css";

const ListLayout = ({ title, list }: ListLayoutProps) => {
	return (
		<Box className={styles.container}>
			<Center className={styles.titleContainer}>
				<Text className={styles.title}>{title}</Text>
			</Center>
			<Box className={styles.linksContainer}>
				{list.map((item) => (
					<Link
						key={item.text}
						className={styles.linkContainer}
						as={item.link.endsWith(".pdf") ? undefined : ReactRouterLink}
						to={item.link}
						href={item.link.endsWith(".pdf") ? item.link : undefined}
						target={item.link.endsWith(".pdf") ? "_blank" : undefined}
						_hover={{
							textDecoration: "none",
						}}
					>
						<Text className={styles.linkText}>{item.text}</Text>
					</Link>
				))}
			</Box>
		</Box>
	);
};

export default ListLayout;
