import { Center, Flex, Text } from "@chakra-ui/react";
import { BrowserView, MobileView } from "react-device-detect";
import styles from "./styles.module.css";
import mobileStyles from "./mobileStyles.module.css";
import { list } from "./assets/content";
import SponsorCarousel from "../../components/SponsorCarousel/SponsorCarousel";

const Sponsors = () => {
	return (
		<>
		
			<MobileView>
			<h2 className={mobileStyles.heading}>SPONSORS</h2>
				{/* <div className={styles.mobileContainer}>
					<Text className={styles.name}>SPONSORS</Text>
					<Flex p={3}>
						<SponsorCarousel
							isCardScrollable={true}
							Details={[...contentUp, ...contentDown]}
						/>
					</Flex>
				</div> */}
				<div className={mobileStyles.container}>
					{list.map((item: any) => {
						return (
							<>
								<div className={mobileStyles.title}>{item.title}</div>

								{item.data.map((data: any) => {
									return (
										<>
											{data.map((i: any) => {
												return (
													<>
														<div className={mobileStyles.cards}>
															<div
																className={
																	mobileStyles.portfolio
																}
															>
																<b>{i.portfolio}</b>
															</div>
															<div className={mobileStyles.logo}>
																{i.href !== "" && (
																	<a
																		href={i.href}
																		target="_blank"
																	>
																		<img
																			src={i.src}
																			alt={data.name}
																		/>
																	</a>
																)}
																{i.href === "" && (
																	<img
																		src={i.src}
																		alt={data.name}
																	/>
																)}
															</div>
														</div>
													</>
												);
											})}
										</>
									);
								})}
							</>
						);
					})}
				</div>
			</MobileView>
			<BrowserView>
			<h2 className={styles.heading}>SPONSORS</h2>
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
					<div className={styles.sponsorList}>
						{list.map((item: any) => {
							return (
								<div className={styles.subcontainer}>
									<div className={styles.title}>{item.title}</div>
									<div className={styles.data}>
										{item.data.map((data: any) => {
											return (
												<div className={styles.row}>
													{data.map((i: any) => {
														return (
															<div className={styles.cards}>
																<div
																	className={styles.portfolio}
																>
																	{i.portfolio}
																</div>
																<div
																	className={styles.logo}
																>
																	
																	{i.href!=="" && <a href={i.href} target="_blank"><img
																		src={i.src}
																		alt={data.name}
																	/></a>}
																	{i.href===""&&
																	<img
																	src={i.src}
																	alt={data.name}
																/>}
																</div>
															</div>
														);
													})}
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</BrowserView>
		</>
	);
};

export default Sponsors;
