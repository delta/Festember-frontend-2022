import React from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Card } from "./Card";
import { content } from "./assets/content";
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style.module.css";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";


function SampleNextArrow({...props}) {
  const {onClick}=props;
  return (
    <ChevronDownIcon
      style={{ position: 'relative',
      transform: 'translate(0%, 150%) scale(2)' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({...props}) {
  const {onClick}=props;
  return (
    <ChevronUpIcon
      style={{ position: 'relative',
      transform: 'translate(0%, -150%) scale(2)' }}
      onClick={onClick}
    />
  );
}

export default function EventsPage(){
  const [goToSlide, setGoToSlide] = React.useState(0);
  const [eventIndex, setEventIndex] = React.useState(0);
  const [clusterIndex, setClusterIndex] = React.useState(0);

  function navigateClusters(index: number){
    setGoToSlide(index)
    setClusterIndex(index)
  }

  const noOfEvents=content[clusterIndex].eventDetails.length;

  const settings = {
    dots: false,
    infinite: true,
    vertical: true,
    slidesToShow: 1,
    adaptiveHeight: false,
    slidesToScroll: 1,
    centerMode: true,
    className: 'center',
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: () => setEventIndex((eventIndex+1)%noOfEvents),
    responsive: [ { breakpoint: 1025, settings: { slidesToShow: 1, vertical: false, arrows: true, prevArrow: undefined, nextArrow: undefined } } ]
  };

  const slides = content.map((slide, index) => ({
		key: index,
		content: (
			<Card color={slide.color} />
		),
		onClick: () => navigateClusters(index),
	}));

  return (
    <>
      <div className={styles.eventsLayout}>
      <div className={styles.clustersMobile}>{content[clusterIndex].title}</div>
      <div className={styles.eventTitle}>
      <Slider {...settings}>
        {content[clusterIndex].eventDetails.map((event,i) => {
          return <div key={i}>
            <h3>{event.title}</h3>
          </div>
        })}
        </Slider>
        </div>
        <div  style={{display: "flex", flexDirection: 'column'}}>
        <div className={styles.clusters}>{content[clusterIndex].title}</div>
        <div className={styles.carouselFix}>Hi</div>
        <Carousel
					slides={slides}
					goToSlide={goToSlide}
          showNavigation={false}
					offsetRadius={2}
					animationConfig={config.gentle}
				/>
        </div>
        <div className={styles.eventDetails}>
        <h3>Event Description</h3>
        <p>{content[clusterIndex].eventDetails[eventIndex].description}</p><br/>
        <h3>Event Details</h3>
        <p>{content[clusterIndex].eventDetails[eventIndex].details}</p><br/>
        <h3>Registration Link</h3>
        <p>{content[clusterIndex].eventDetails[eventIndex].link}</p>
        </div>
      </div>
      </>
  )
}
