import React from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Card } from "./Card";
import { contents } from "./assets/contents";
import eventDetails from './assets/eventDetails.json';
import './style.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Scrollbars } from 'react-custom-scrollbars';

function SampleNextArrow({...props}) {
  const {className, onClick}=props;
  return (
    <div
      className={className}
      style={{ position: 'relative',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%) rotate(90deg)' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({...props}) {
  const {className, onClick}=props;
  return (
    <div
      className={className}
      style={{ position: 'relative',
      left: '50%',
      top: '20%',
      transform: 'translate(-50%, -500%) rotate(90deg)' }}
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

  const noOfEvents=eventDetails.eventDetails.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    classname: 'center',
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    afterChange: () => setEventIndex((eventIndex+1)%noOfEvents),
    responsive: [ { breakpoint: 575, settings: { slidesToShow: 1, vertical: false, arrows: true, prevArrow: undefined, nextArrow: undefined } } ]
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
        <div className="eventDetails">
          <Scrollbars >
        <h3 style={{color: '#79E2FB'}}>Event Description</h3>
        <p>{eventDetails.eventDetails[eventIndex].description}</p><br/>
        <h3 style={{color: '#79E2FB'}}>Event Details</h3>
        <p>{eventDetails.eventDetails[eventIndex].details}</p><br/>
        <h3 style={{color: '#79E2FB'}}>Registration Link</h3>
        <p>{eventDetails.eventDetails[eventIndex].link}</p>
        </Scrollbars>
        </div>
      </div>
      </>
  )
}
