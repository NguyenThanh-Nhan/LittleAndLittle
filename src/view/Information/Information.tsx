// import React, { useState } from "react";
import { NewEventType } from "../../types/event";
import "../Information/Information.css";

interface IProps {
  event: NewEventType;
  detailsPage?: boolean;
}
function Information({ event, detailsPage }: IProps) {
    // const [viewEvent, setViewEvent] = useState(false);
  console.log(event, "event");
  return (
    <div className="bg-1">
      <div className="bg-2">
        <div className="row">
          <div className="col">
            <p className="content text-center mt-5">Sự kiện nỗi bật</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <div
              id="carouselExampleControls"
              className="carousel carousel-dark slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="card-wrapper container-sm d-flex justify-content-around">
                    <div className="card">
                      <img
                        src={event.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <div className="nameevent">
                          <p>{event.nameevent}</p>
                        </div>
                        <div className="location">
                          <p>{event.location}</p>
                        </div>
                        <div className="startdate">
                          <p>
                            <i className="bi bi-calendar4-week"></i>{" "}
                            {event.startdate}-{" "}
                            <span className="enddate">{event.enddate}</span>
                          </p>
                        </div>
                        <div className="price">
                          <p>{event.price}</p>
                        </div>
                        <button type="button" className="button-sen">
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="card-wrapper container-sm d-flex   justify-content-around"></div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa"
                crossOrigin="anonymous"
              ></script>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
