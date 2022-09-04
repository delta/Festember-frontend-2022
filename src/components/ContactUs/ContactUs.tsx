import { Center, Flex, Text } from "@chakra-ui/react";
import { BrowserView, MobileView, isTablet } from "react-device-detect";
import { SplideCarousel } from "..";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ChevronRightIcon } from "@chakra-ui/icons";

import "@splidejs/react-splide/css/skyblue";
import styles from "./styles.module.css";

const ContactDetails = [
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

const ContactUs = (): JSX.Element => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileContainer}>
					<Text className={styles.name}>CONTACT US</Text>
					<Flex p={3}>
						<SplideCarousel Details={ContactDetails} />
					</Flex>
				</div>
			</MobileView>

			<BrowserView>
				<Flex flexDirection="column" className={styles.container}>
					<Center>
						<SplideCarousel Details={ContactDetails} />
					</Center>
					<Text className={styles.name}>CONTACT US</Text>
				</Flex>
			</BrowserView>
		</>
	);
};

export default ContactUs;
