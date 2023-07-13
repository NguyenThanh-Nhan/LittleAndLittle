import React from "react";
import { NewEventType } from "../../types/event";
import "./CardEvent.css";
import { Link } from "react-router-dom";

interface IProps {
  event: NewEventType;
  detailsPage?: boolean;
}
function CardEvent({ event, detailsPage }: IProps) {
  console.log(event, "event");
  return (
    <div className="card">
      <img src={event.image} className="card-img-top" alt="eventImage" />
      <div className="card-body">
        <div className="nameevent">
          <p>{event.nameevent}</p>
        </div>
        <div className="location">
          <p>{event.location}</p>
        </div>
        <div className="startdate">
          <p>
            <i className="bi bi-calendar4-week"></i> {event.startdate}-{" "}
            <span className="enddate">{event.enddate}</span>
          </p>
        </div>
        <div className="price">
          <p>{event.price} VNĐ</p>
        </div>
        <Link to={`/events/${event.id}`}>
          <button type="button" className="button-sen">
            Xem chi tiết
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardEvent;
