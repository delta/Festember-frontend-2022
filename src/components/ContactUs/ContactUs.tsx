import { Center, Flex, Text } from "@chakra-ui/react";
import { BrowserView, MobileView, isTablet } from "react-device-detect";
import { SplideCarousel } from "..";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ChevronRightIcon } from "@chakra-ui/icons";

import "@splidejs/react-splide/css/skyblue";
import styles from "./styles.module.css";

const ContactDetails = [
	{
		name: "For Participation Queries",
		content:
			["Bipin: 6380307533","Jeevanand: 8139016201","Saisanika: 8870175774"]
	},
	{
		name: "For Event Queries",
		content:
			["Anushree: 8136937939","Niruthan: 9150513344","Rashi: 7340331010"]
	},
	{
		name: "For Accommodation Queries",
		content:
			["Abbirami: 8870055242","Arvindh: 9361115485","Kamalesh: 9150738243"]
	},
	{
		name: "For Sponsorship Queries",
		content:
			["Adarsh: 9500054901","Nithin: 9842018281","Sabarni: 9432514975"]
	},
	{
		name: "For Media Queries",
		content:
			["Ishikaa: 7904995540","Pranava: 9381044956","Suraj: 7200808968"]
	},
	{
		name: "For Social Initiatives",
		content:
			["Janaartheni: 7871297368","Uma: 9848235700"]
	},
	{
		name: "For Guest Speaker queries",
		content:
			["Govind: 6385819341","Greeshma: 8113814880","Santhosh: 8668173915"]
	},
	{
		name: "For queries involving Talent Agencies",
		content:
			["Manojkumar: 8056167555","Pranav: 7021942582","Thushali: 9444120334"]
	},
	{
		name: "Other Queries",
		content:
			["Sanjeev : 8056158694"]
	},
];

const ContactUs = (): JSX.Element => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileContainer}>
					<Text className={styles.name}>CONTACT US</Text>
					<Flex flexDirection="column"  p={3}>
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
