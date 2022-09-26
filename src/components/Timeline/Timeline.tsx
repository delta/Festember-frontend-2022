import {
	Grid,
	GridItem,
	VStack,
	Circle,
	Center,
	Box,
	Text,
	HStack,
	useMediaQuery,
} from "@chakra-ui/react";
import styles from "./styles.module.css";
import TimeLineElement from "../TimeLineElement/TimeLineElement";
import timeline from "./content";
import { isMobile } from "react-device-detect";

const config = {
	radius: 130,
	mobileRadius: 50,
	deltaRadius: 25,
	mobileDeltaRadius: 9,
	lineThickness: 11,
	mobileLineThickness: 10,
	circleColor: "#48A0FF",
};

const Timeline = () => {
	return (
		<Box className={styles.outerContainer}>
			<Box className={styles.titleContainer}>
				<Text className={styles.mainTitle}>TIMELINE</Text>
			</Box>
			<Box className={styles.card}>
				{!isMobile ? (
					<Grid
						templateRows={
							isMobile
								? `repeat(${timeline.length}, 1fr)`
								: "repeat(5, 1fr)"
						}
						templateColumns={`repeat(${timeline.length}, 1fr)`}
						gap={0}
						className={styles.grid}
					>
						{timeline.map((item, index) => {
							return (
								<TimeLineElement
									key={index}
									time={item.time}
									title={item.title}
									day={item.day}
									venue={item.venue}
									index={index}
									timelineLength={timeline.length}
									config={config}
								/>
							);
						})}
					</Grid>
				) : (
					<VStack className={styles.timelineStack}>
						{timeline.map((item, index) => {
							return (
								<HStack className={styles.timelineElement}>
									<VStack width={"20%"} height={"100%"}>
										<Center
											className={styles.marginZero}
											height="100%"
											width="100%"
										>
											{index != 0 && (
												<Box className={styles.line}></Box>
											)}
										</Center>
										<Circle
											className={styles.marginZero}
											size={config.mobileRadius}
											bg="white"
										>
											<Circle
												className={styles.year}
												size={
													config.mobileRadius -
													config.mobileDeltaRadius
												}
											>
												{`DAY-${item.day}`}
											</Circle>
										</Circle>
										<Center
											className={styles.marginZero}
											margin={0}
											height="100%"
											width="100%"
										>
											{index != timeline.length - 1 && (
												<Box className={styles.line}></Box>
											)}
										</Center>
									</VStack>
									<VStack alignItems={"flex-start"} width={"80%"}>
										<Text className={styles.title}>{item.title}</Text>
										<Text className={styles.time}>{item.time}</Text>
										<Text className={styles.venue}>{item.venue}</Text>
									</VStack>
								</HStack>
							);
						})}
					</VStack>
				)}
			</Box>
		</Box>
	);
};

export default Timeline;
