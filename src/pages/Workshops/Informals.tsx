import React, { useEffect, useState, useContext } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { config as appConfig } from "../../../config";
import { Card } from "../../components/CarouselCard/Card";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";

export default function Informals() {
	const [goToSlide, setGoToSlide] = useState(0);
	const [clusterIndex, setClusterIndex] = useState(0);
	const [informalsDetails, setInformalsDetails] = useState<
		InformalsDetailsType[]
	>([]);

	function navigateClusters(index: number) {
		setGoToSlide(index);
		setClusterIndex(index);
	}

	useEffect(() => {
		const fetchInformalsDetails = async () => {
			fetch(`${appConfig.backendOrigin}/getInformalsDetails`, {
				method: "GET",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((res) => res.json())
				.then((response) => {
					console.log(response);
					setInformalsDetails(response.message.informals_details);
				})
				.catch((e) => {
					console.log(e);
				});
		};
		fetchInformalsDetails();
	}, []);

	const slides =
		informalsDetails &&
		informalsDetails.map((slide, index) => ({
			key: index,
			content: (
				<Card
					color={index % 2 ? "#fff" : "#000"}
					src={
						appConfig.basePath +
						"/Assets/Images/informals-images/" +
						slide.informals_image_name +
						".jpg"
					}
				/>
			),
			onClick: () => navigateClusters(index),
		}));

	return (
		<>
			<div className={styles.workshopsLayout}>
				<div></div>
				<div className={styles.workshopCarousel}>
					<div className={styles.workshops}>
						{informalsDetails &&
							informalsDetails[clusterIndex]?.informals_name}
					</div>
					{informalsDetails && (
						<Carousel
							slides={slides}
							goToSlide={goToSlide}
							showNavigation={false}
							offsetRadius={2}
							animationConfig={config.gentle}
						/>
					)}
				</div>

				<div className={styles.workshopDetails}  >
					<h3>
						{informalsDetails &&
							informalsDetails[clusterIndex]?.informals_name}{" "}
						Description
					</h3>
					<br />
					<p>
						{informalsDetails &&
							informalsDetails[clusterIndex]?.informals_desc}
					</p>
					<br />
				</div>
			</div>
		</>
	);
}
