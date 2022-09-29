import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-spring-3d-carousel";
import { useDisclosure } from "@chakra-ui/react";
import { config } from "react-spring";
import { userContext } from "../../contexts/UserContext";
import { config as appConfig } from "../../../config";
import { Card } from "../../components/CarouselCard/Card";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";
import { toast } from "react-hot-toast";
import { content } from "./assets/content";

export default function GuestLectures() {
	const { isOpen, onClose, onToggle } = useDisclosure();
	const [goToSlide, setGoToSlide] = useState(0);
	const [clusterIndex, setClusterIndex] = useState(0);
	const [guestLecturesDetails, setGuestLecturesDetails] = useState<
		GuestLecturesDetailsType[]
	>([]);

	useEffect(() => {
		setGuestLecturesDetails(content);
	}, []);

	const formatDate = (date: string) => {
		const dateObj = new Date(date);
		return `${dateObj.getDate()}-${
			dateObj.getMonth() + 1
		}-${dateObj.getFullYear()}`;
	};

	function navigateClusters(index: number) {
		setGoToSlide(index);
		setClusterIndex(index);
	}

	const slides = guestLecturesDetails.map((slide, index) => ({
		key: index,
		content: (
			<Card
				color={index % 2 ? "#fff" : "#000"}
				src={
					appConfig.basePath +
					"/Assets/Images/guest-lectures/" +
					slide.guestLectures_image_name
				}
			/>
		),
		onClick: () => navigateClusters(index),
	}));

	console.log(slides);

	return (
		<>
			<div className={styles.workshopsLayout}>
				<div></div>
				<div className={styles.workshopCarousel}>
					<div className={styles.workshops}>
						{guestLecturesDetails &&
							guestLecturesDetails[clusterIndex]?.guestLectures_name}
					</div>

					{guestLecturesDetails && (
						<Carousel
							slides={slides}
							goToSlide={goToSlide}
							showNavigation={false}
							offsetRadius={2}
							animationConfig={config.gentle}
						/>
					)}
				</div>
				{guestLecturesDetails && (
					<div className={styles.workshopDetails}>
						<h3>About the Guest</h3>
						<p>
							{guestLecturesDetails &&
								guestLecturesDetails[clusterIndex]?.guestLectures_desc}
						</p>
					</div>
				)}
			</div>
		</>
	);
}
