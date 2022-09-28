import { Center, Flex, Text } from "@chakra-ui/react";
import { BrowserView, MobileView, isTablet } from "react-device-detect";
import { SplideCarousel } from "../../components";
import styles from "./styles.module.css";
import {contentUp,contentDown} from "./assets/content";
import SponsorCarousel from "../../components/SponsorCarousel/SponsorCarousel";
const Sponsor = [
	{
		name: "Lorem ipsum",
		designation: "Lorem ipsum",
		content:
			["urna egestas auctor blandit, quam nunc mollis ante, eu consectetur quam ex vitae erat. Nulla ut pretium nulla. Praesent commodo ex odio, at ultricies sem ultrices ut. Sed et ullamcorper mi."],
	},
	{
		name: "Lorem ipsum",
		designation: "Lorem ipsum",
		content:
			["urna egestas auctor blandit, quam nunc mollis ante, eu consectetur quam ex vitae erat. Nulla ut pretium nulla. Praesent commodo ex odio, at ultricies sem ultrices ut. Sed et ullamcorper mi."],
	},
	{
		name: "Lorem ipsum",
		designation: "Lorem ipsum",
		content:
			["urna egestas auctor blandit, quam nunc mollis ante, eu consectetur quam ex vitae erat. Nulla ut pretium nulla. Praesent commodo ex odio, at ultricies sem ultrices ut. Sed et ullamcorper mi."],
	},
];

const Sponsors = () => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileContainer}>
					<Text className={styles.name}>SPONSORS</Text>
					<Flex p={3}>
						<SponsorCarousel isCardScrollable={true} Details={[...contentUp,...contentDown]} />
					</Flex>
				</div>
			</MobileView>
			<BrowserView>
				<Flex flexDirection="column" className={styles.container}>
					<Center mb={5}>
						<SponsorCarousel isCardScrollable={true} Details={contentUp} />
					</Center>
					<Center>
						<SponsorCarousel isCardScrollable={true} Details={contentDown} />
					</Center>
					<Text className={styles.name}>SPONSORS</Text>
				</Flex>
			</BrowserView>
		</>
	);
};

export default Sponsors;
