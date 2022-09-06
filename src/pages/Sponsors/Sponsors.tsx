import { Center, Flex, Text } from "@chakra-ui/react";
import { BrowserView, MobileView, isTablet } from "react-device-detect";
import { SplideCarousel } from "../../components";
import styles from "./styles.module.css";

const Sponsor = [
	{
		name: "Lorem ipsum",
		designation: "Lorem ipsum",
		content:
			"urna egestas auctor blandit, quam nunc mollis ante, eu consectetur quam ex vitae erat. Nulla ut pretium nulla. Praesent commodo ex odio, at ultricies sem ultrices ut. Sed et ullamcorper mi.",
	},
	{
		name: "Lorem ipsum",
		designation: "Lorem ipsum",
		content:
			"urna egestas auctor blandit, quam nunc mollis ante, eu consectetur quam ex vitae erat. Nulla ut pretium nulla. Praesent commodo ex odio, at ultricies sem ultrices ut. Sed et ullamcorper mi.",
	},
	{
		name: "Lorem ipsum",
		designation: "Lorem ipsum",
		content:
			"urna egestas auctor blandit, quam nunc mollis ante, eu consectetur quam ex vitae erat. Nulla ut pretium nulla. Praesent commodo ex odio, at ultricies sem ultrices ut. Sed et ullamcorper mi.",
	},
];

const Sponsors = () => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileContainer}>
					<Text className={styles.name}>SPONSORS</Text>
					<Flex p={3}>
						<SplideCarousel Details={Sponsor} />
					</Flex>
				</div>
			</MobileView>
			<BrowserView>
				<Flex flexDirection="column" className={styles.container}>
					<Center mb={5}>
						<SplideCarousel Details={Sponsor} />
					</Center>
					<Center>
						<SplideCarousel Details={Sponsor} />
					</Center>
					<Text className={styles.name}>SPONSORS</Text>
				</Flex>
			</BrowserView>
		</>
	);
};

export default Sponsors;
