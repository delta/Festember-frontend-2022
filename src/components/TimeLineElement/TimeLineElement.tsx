import { GridItem, VStack, Box, Text, HStack, Circle } from "@chakra-ui/react";
import React from "react";
import styles from "./styles.module.css";

const TimeLineElement = ({
	day,
	venue,
	time,
	title,
	index,
	timelineLength,
	config,
}: TimeLineElementProps) => {
	return (
		<GridItem
			rowStart={index % 2 === 0 ? 1 : 3}
			rowEnd={index % 2 === 0 ? 4 : 6}
			colSpan={1}
			className={styles.timelineElement}
			flexDirection={index % 2 === 0 ? "column" : "column-reverse"}
		>
			<Box className={styles.contentContainer}>
				<Text className={styles.title}>{title}</Text>
				<Text className={styles.time}>{time}</Text>
				<Text className={styles.venue}>{venue}</Text>
			</Box>
			<HStack className={styles.timelineContainter}>
				<Box className={styles.lineContainer + " " + styles.marginZero}>
					{index === 0 ? null : (
						<Box
							height={config.lineThickness}
							className={styles.line}
						></Box>
					)}
				</Box>
				<Circle
					bg={"white"}
					marginInlineStart={0}
					size={config.radius}
					className={styles.outerCircle + " " + styles.marginZero}
				>
					<Circle
						marginInlineStart={0}
						bg={config.circleColor}
						size={config.radius - config.deltaRadius}
						className={styles.innerCircle}
					>
						<Text className={styles.year}>{`DAY-${day}`}</Text>
					</Circle>
				</Circle>
				<Box className={styles.lineContainer + " " + styles.marginZero}>
					{index === timelineLength - 1 ? null : (
						<Box
							height={config.lineThickness}
							className={styles.line}
						></Box>
					)}
				</Box>
			</HStack>
		</GridItem>
	);
};

export default TimeLineElement;
