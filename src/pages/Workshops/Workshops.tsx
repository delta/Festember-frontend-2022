import React from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Card } from "../../components/CarouselCard/Card";
import { content } from "./assets/content";
import './style.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";

export default function Workshops(){
  const [goToSlide, setGoToSlide] = React.useState(0);
  const [clusterIndex, setClusterIndex] = React.useState(0);

  function navigateClusters(index: number){
    setGoToSlide(index)
    setClusterIndex(index)
  }

  const slides = content.map((slide, index) => ({
		key: index,
		content: (
			<Card color={slide.color} src={slide.src}/>
		),
		onClick: () => navigateClusters(index),
	}));

  return (
    <>
      <div className={styles.workshopsLayout}>
          <div></div>
        <div  className={styles.workshopCarousel}>
        <div className={styles.workshops}>{content[clusterIndex].title}</div>
        <Carousel
					slides={slides}
					goToSlide={goToSlide}
          showNavigation={false}
					offsetRadius={2}
					animationConfig={config.gentle}
				/>
        </div>

        <div className={styles.workshopDetails}>
        <h3>Workshop Description</h3>
        <p>{content[clusterIndex].description}</p><br/>
        <h3>Workshop Details</h3>
        <p>{content[clusterIndex].details}</p><br/>
        <button
					className={styles.registerButton}
					type="button"
					onClick={() => window.open('https:/' + content[clusterIndex].link, '_blank')}
				>
					Register here
				</button>
        </div>
      </div>
      </>
  )
}
