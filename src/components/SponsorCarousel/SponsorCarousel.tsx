import { Flex, Text, Image } from "@chakra-ui/react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { isTablet, isBrowser } from "react-device-detect";

import "@splidejs/react-splide/css/skyblue";
import styles from "./styles.module.css";

const SplideCarousel = ({ Details, isCardScrollable }: any) => {
	return (
		<Splide
			style={{ fontFamily: "Poppins" }}
			hasTrack={false}
			options={
				!isBrowser
					? {
							perPage: window.innerWidth < 390 ? 2 : isTablet ? 4 : 3,
							perMove: 1,
							direction: "ttb",
							height:
								window.innerWidth < 390
									? "25rem"
									: isTablet
									? "44rem"
									: "34rem",
							pagination: false,
							arrows: true,
							gap: "0.8em",
							heightRatio: 0.4,
					  }
					: {
							type: "loop",
							perPage: 3,
							perMove: 1,
							width: "120%",
							autoHeight: true,
							rewind: true,
							pagination: false,
							arrows: true,
							gap: "1.15em",
							heightRatio: 0.25,
					  }
			}
		>
			<SplideTrack>
				{Details.map((obj: any) => {
					return (
						<SplideSlide
							className={
								styles.card +
								" " +
								(isCardScrollable
									? styles.cardScroll
									: styles.cardNoScroll)
							}
							key={obj.name}
						>
							<Flex
								flexDirection="column"
								color="white"
								p={2}
								align="center"
								justifyContent="center"
								height="100%"
								className={styles.cardDiv}
							>
								<div className={styles.cardImageParent}>
									<div className={styles.cardImage}>
										<Image src={obj.src} />
									</div>
									<div className={styles.cardText}>
										<Text
											align="center"
											style={
												isBrowser
													? { fontSize: "125%" }
													: { fontSize: "100%" }
											}
										>
											{obj.companyName}
										</Text>
									</div>
								</div>
								<div className={styles.cardHoverParent}>
									<div className={styles.cardHoverTextChild}>
										<Text className={styles.cardHoverText}>
											{obj.portfolio}
										</Text>
									</div>
								</div>
							</Flex>
						</SplideSlide>
					);
				})}
			</SplideTrack>
			<div className="splide__arrows">
				<button
					className="splide__arrow splide__arrow--prev"
					style={{
						color: "white",
						marginTop: isBrowser ? "0em" : "-3em",
						marginLeft: isBrowser ? "-5em" : "0em",
					}}
				>
					<ChevronRightIcon />
				</button>
				<button
					className="splide__arrow splide__arrow--next"
					style={{
						color: "white",
						marginBottom: isBrowser ? "0em" : "-3em",
						marginRight: isBrowser ? "-5em" : "0em",
					}}
				>
					<ChevronRightIcon />
				</button>
			</div>
		</Splide>
	);
};

export default SplideCarousel;
