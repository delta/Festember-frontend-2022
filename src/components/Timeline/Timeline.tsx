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

const config = {
	radius: 130,
	mobileRadius: 50,
	deltaRadius: 25,
	mobileDeltaRadius: 9,
	lineThickness: 11,
	mobileLineThickness: 10,
	circleColor: "#48A0FF",
};

const timeline: TimelineElement[] = [
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
	{
		yearTitle: "2022",
		title: "Lorem ipsum",
		content:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, quis aliquam nunc nisl euismod nisl. ",
	},
];

const Timeline = () => {
	const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");
	return (
		<Box className={styles.outerContainer}>
			<Box className={styles.titleContainer}>
				<Text className={styles.mainTitle}>TIMELINE</Text>
			</Box>
			<Box className={styles.card}>
				{!isSmallerThan600 ? (
					<Grid
						templateRows={
							isSmallerThan600
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
									yearTitle={item.yearTitle}
									title={item.title}
									content={item.content}
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
												{item.yearTitle}
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
										<Text className={styles.content}>
											{item.content}
										</Text>
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
