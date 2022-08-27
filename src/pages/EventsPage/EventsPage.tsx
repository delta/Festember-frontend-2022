import React from "react";
import Carousel from "react-spring-3d-carousel";
import BackgroundAnimation from '../../components/background/BackgroundAnimation';
import NavBar from '../../components/navbar/NavBar';
import { config } from "react-spring";
import { Card } from "./Card";
import { contents } from "./assets/contents";
import eventDetails from './assets/eventDetails.json';
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function EventsPage(){
  const [goToSlide, setGoToSlide] = React.useState(0);
  const [eventIndex, setEventIndex] = React.useState(0);
  const [clusterIndex, setClusterIndex] = React.useState(0);

  function navigateClusters(index: number){
    setGoToSlide(index)
    setClusterIndex(index)
  }

  const noOfEvents=eventDetails.eventDetails.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    className: "center",
    afterChange: () => setEventIndex((eventIndex+1)%noOfEvents),
    responsive: [ { breakpoint: 575, settings: { slidesToShow: 1, vertical: false, arrows: true } } ]
  };

  const slides = contents.map((slide, index) => ({
		key: index,
		content: (
			<Card color={slide.color} />
		),
		onClick: () => navigateClusters(index),
	}));

  return (
    <>
     <BackgroundAnimation />
      <NavBar />
      <div className="clustersMobile">{contents[clusterIndex].title}</div>
      <div className="eventsLayout">
      <div className="eventTitle">
      <Slider {...settings}>
        {eventDetails.eventDetails.map((event,i) => {
          return <div key={i}>
            <h3>{event.title}</h3>
          </div>
        })}
        </Slider>
        </div>
        <div style={{width: '10%'}}></div>
        <div  style={{display: "flex", flexDirection: 'column'}}>
          <div className="clusters">{contents[clusterIndex].title}</div>
        <Carousel
					slides={slides}
					goToSlide={goToSlide}
          showNavigation={false}
					offsetRadius={2}
					animationConfig={config.gentle}
				/>
        </div>
        <div style={{width: '10%'}}></div>
        <div className="eventDetails">
        <h3 style={{color: '#79E2FB'}}>Event Description</h3>
        <p>{eventDetails.eventDetails[eventIndex].description}</p>
        <h3 style={{color: '#79E2FB'}}>Event Details</h3>
        <p>{eventDetails.eventDetails[eventIndex].details}</p>
        <h3 style={{color: '#79E2FB'}}>Registration Link</h3>
        <p>{eventDetails.eventDetails[eventIndex].link}</p>
        </div>
      </div>
      </>
  )
}
