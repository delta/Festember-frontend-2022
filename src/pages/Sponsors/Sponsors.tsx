import { Center, Flex, Text } from "@chakra-ui/react";
import { BrowserView, MobileView } from "react-device-detect";
import styles from "./styles.module.css";
import { list } from "./assets/content";
import SponsorCarousel from "../../components/SponsorCarousel/SponsorCarousel";

const Sponsors = () => {
	return (
		<>
			<MobileView>
				{/* <div className={styles.mobileContainer}>
					<Text className={styles.name}>SPONSORS</Text>
					<Flex p={3}>
						<SponsorCarousel
							isCardScrollable={true}
							Details={[...contentUp, ...contentDown]}
						/>
					</Flex>
				</div> */}
			</MobileView>
			<BrowserView>
				{/* <Flex flexDirection="column" className={styles.container}>
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
				</Flex> */}
				<div className={styles.container}>
					
						{list.map((item: any) => {
							return (
								<div className={styles.sponsorList}>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.data}>
										{item.data.map((data: any) => {
											return (
												<div className={styles.row}>
													{data.map((i: any) => {
														return (
															<div className={styles.cards}>
																<div className={styles.portfolio}>{i.portfolio}</div>
																<div className={styles.logo}><img src={i.src} alt={data.name} /></div>
															</div>
														)
													})}
												</div>
											)
										})}
									</div>
								</div>
							)
						})}

				</div>
			</BrowserView>
		</>
	);
};

export default Sponsors;
