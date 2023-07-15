import React from "react";
import "./CardDetail.css";
import { NewEventType } from "../../types/event";
import { flagsleft, flagsright } from "../../assect/img/1index";

interface IProps {
  event: NewEventType;
  detailsPage?: boolean;
}
function CardDetail({ event, detailsPage }: IProps) {
  return (
    <div className="bg-eventDetail">
      <div className="row">
        <div className="col col-3">
          <img src={flagsleft} alt="" className="flagsleft-img" />
        </div>
        <div className="col col-6 text-center">
          <p className=" detail-lable ">{event.nameevent}</p>
        </div>
        <div className="col col-3">
          <img src={flagsright} alt="" className="flagsright-img" />
        </div>
      </div>
      <div className="row detail-bg1">
        <div className="row detail-bg2">
          <div className="col col-3">
            <div className="row mt-5">
              <img src={event.image} alt="" className="detail-img1" />
            </div>
            <div className="row mt-5">
              <p>
                <i className="bi bi-calendar4-week"></i> {event.startdate}-
                <span className="enddate">{event.enddate}</span>
              </p>
            </div>
            <div className="row detail-location">
              <p>{event.location}</p>
            </div>
            <div className="row">
              <p className="detail-price">{event.price} VNĐ</p>
            </div>
          </div>
          <div className="col col-3">
            <div className="row mt-5">
              <p className="description1">{event.description1}</p>
            </div>
          </div>
          <div className="col col-3">
            <div className="row mt-5">
              <img src={event.imagedetail1} alt="" className="imagedetail" />
            </div>
            <div className="row mt-3">
              <p className="description23">{event.description2}</p>
            </div>
          </div>
          <div className="col col-3">
            <div className="row mt-5">
              <p className="description23">{event.description3}</p>
            </div>
            <div className="row">
              <img src={event.imagedetail2} alt="" className="imagedetail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetail;
