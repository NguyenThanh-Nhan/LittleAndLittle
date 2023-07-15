import React, { useEffect, useState, useRef } from "react";
import { eventsCollection } from "../../config/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { NewEventType } from "../../types/event";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Event.css";
import CardEvent from "../CardEvent/CardEvent";
import { flagsleft, flagsright } from "../../assect/img/1index";

function Event() {
  const [events, setEvents] = useState<NewEventType[]>([]);
  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      eventsCollection,
      (snapshot: QuerySnapshot<DocumentData>) => {
        setEvents(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      }
    );

    return () => unsubscribe();
  }, []);

  const previous = () => {
    sliderRef.current?.slickPrev();
  };

  const next = () => {
    sliderRef.current?.slickNext();
  };

  const settings = {
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="card-event">
      <div className="row">
        <div className="col col-3">
          <img src={flagsleft} alt="" className="event-flagsleft" />
        </div>
        <div className="col text-center mt-5 col-6">
          <h1 className="content">Sự kiện nổi bật</h1>
        </div>
        <div className="col col-3">
          <img src={flagsright} alt="" className="event-flagsright"/>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col col-1 text-center previous-buttons">
          <button className="slider-button previous-button" onClick={previous}>
            <i className="bi bi-caret-left-fill"></i>
          </button>
        </div>
        <div className="col col-10">
          <Slider ref={sliderRef} {...settings}>
            {events && events.length ? (
              events.map((event) => <CardEvent key={event.id} event={event} />)
            ) : (
              <h2 className="no-events text-center">There are no events</h2>
            )}
          </Slider>
        </div>
        <div className="col col-1 text-center next-buttons">
          <button className="slider-button next-button" onClick={next}>
            <i className="bi bi-caret-right-fill" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Event;
