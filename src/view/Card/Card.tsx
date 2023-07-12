import React, { useEffect, useState, useRef } from "react";
import { eventsCollection } from "../../config/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { NewEventType } from "../../types/event";
import Information from "../Information/Information";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Card/Card.css";

function Card() {
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
        <div className="col text-center">
          <h1 className="content">Sự kiện sôi nổi</h1>
        </div>
      </div>
      <div className="row mt-5 ms-5">
        <div className="col col-1 previous-buttons">
          <button className="slider-button previous-button" onClick={previous}>
            Previous
          </button>
        </div>
        <div className="col col-10">
          <Slider ref={sliderRef} {...settings}>
            {events && events.length ? (
              events.map((event) => (
                <Information key={event.id} event={event} />
              ))
            ) : (
              <h2 className="no-events text-center">There are no events</h2>
            )}
          </Slider>
        </div>
        <div className="col col-1 next-buttons">
          <button className="slider-button next-button" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
