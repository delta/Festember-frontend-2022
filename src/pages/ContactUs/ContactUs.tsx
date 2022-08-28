import { Center, Flex, Text } from "@chakra-ui/react";
import { BrowserView, MobileView, isTablet } from "react-device-detect";

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
						<Splide
							hasTrack={false}
							options={{
								type: "loop",
								perPage: window.innerWidth < 390 ? 2 : isTablet ? 4 : 3,
								perMove: 1,
								direction: "ttb",
								height:
									window.innerWidth < 390
										? "25rem"
										: isTablet
										? "44rem"
										: "34rem",
								rewind: true,
								pagination: false,
								arrows: true,
								gap: "0.8em",
								heightRatio: 0.4,
							}}
						>
							<SplideTrack>
								{ContactDetails.map((Contact) => {
									return (
										<SplideSlide className={styles.card}>
											<Flex
												flexDirection="column"
												color="white"
												p={1}
												align="center"
												justifyContent="center"
												height="100%"
											>
												<Text align="center" fontSize="2xl">
													{Contact.name}
												</Text>
												<Text align="center" fontSize="lg">
													{Contact.designation}
												</Text>
												<Text align="center" fontSize="sm">
													{Contact.content}
												</Text>
											</Flex>
										</SplideSlide>
									);
								})}
							</SplideTrack>
							<div className="splide__arrows">
								<button
									className="splide__arrow splide__arrow--prev"
									style={{ color: "white", marginTop: "-3em" }}
								>
									<ChevronRightIcon />
								</button>
								<button
									className="splide__arrow splide__arrow--next"
									style={{ color: "white", marginBottom: "-3em" }}
								>
									<ChevronRightIcon />
								</button>
							</div>
						</Splide>
					</Flex>
				</div>
			</MobileView>

			<BrowserView>
				<Flex flexDirection="column" className={styles.container}>
					<Center>
						<Splide
							hasTrack={false}
							options={{
								type: "loop",
								perPage: 3,
								perMove: 1,
								width: "120%",
								autoHeight: true,
								rewind: true,
								pagination: false,
								arrows: true,
								gap: "1.25em",
								heightRatio: 0.25,
							}}
						>
							<SplideTrack>
								{ContactDetails.map((Contact) => {
									return (
										<SplideSlide className={styles.cardProperty}>
											<Flex
												flexDirection="column"
												color="white"
												p={3}
												align="center"
												justify="center"
												height="100%"
											>
												<Text align="center" fontSize="2xl">
													{Contact.name}
												</Text>
												<Text align="center" fontSize="lg">
													{Contact.designation}
												</Text>
												<Text align="center" fontSize="sm">
													{Contact.content}
												</Text>
											</Flex>
										</SplideSlide>
									);
								})}
							</SplideTrack>
							<div className="splide__arrows">
								<button
									className="splide__arrow splide__arrow--prev"
									style={{ color: "white", marginLeft: "-5em" }}
								>
									<ChevronRightIcon />
								</button>
								<button
									className="splide__arrow splide__arrow--next"
									style={{ color: "white", marginRight: "-5em" }}
								>
									<ChevronRightIcon />
								</button>
							</div>
						</Splide>
					</Center>
					<Text className={styles.name}>CONTACT US</Text>
				</Flex>
			</BrowserView>
		</>
	);
};

export default ContactUs;
