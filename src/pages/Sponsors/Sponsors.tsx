import { Center, Flex, Text } from "@chakra-ui/react";
import { BrowserView, MobileView } from "react-device-detect";
import styles from "./styles.module.css";
import { contentUp, contentDown } from "./assets/content";
import SponsorCarousel from "../../components/SponsorCarousel/SponsorCarousel";

const Sponsors = () => {
	return (
		<>
			<MobileView>
				<div className={styles.mobileContainer}>
					<Text className={styles.name}>SPONSORS</Text>
					<Flex p={3}>
						<SponsorCarousel
							isCardScrollable={true}
							Details={[...contentUp, ...contentDown]}
						/>
					</Flex>
				</div>
			</MobileView>
			<BrowserView>
				<Flex flexDirection="column" className={styles.container}>
					<Center mb={5}>
						<SponsorCarousel
							isCardScrollable={true}
							Details={contentUp}
						/>
					</Center>
					<Center>
						<SponsorCarousel
							isCardScrollable={true}
							Details={contentDown}
						/>
					</Center>
					<Text className={styles.name}>SPONSORS</Text>
				</Flex>
			</BrowserView>
		</>
	);
};

export default Sponsors;
