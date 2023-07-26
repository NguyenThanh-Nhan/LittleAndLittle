import React, { useEffect, useRef, useState } from "react";
import "../Payment/Payment.css";
import { alvin } from "../../assect/img/1index";
import { NewPayType } from "../../types/pay";
import Slider from "react-slick";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { paysCollection } from "../../config/controller";
import CardPay from "../CardPay/CardPay";
import { useLocation } from "react-router-dom";

function Payment() {
  const [pays, setPays] = useState<NewPayType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const sliderRef = useRef<Slider>(null);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedQuantity = parseInt(queryParams.get("quantity") || "0");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      paysCollection,
      (snapshot: QuerySnapshot<DocumentData>) => {
        setPays(
          snapshot.docs.map((doc) => {
            return {
              idqr: doc.id,
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
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const next = () => {
    if (currentPage < Math.ceil(filteredPays.length / slidesToShow)) {
      sliderRef.current?.slickNext();
      setCurrentPage((prevPage) => Math.min(prevPage + 1, getTotalPages()));
    }
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
  const getTotalPages = () => {
    if (pays.length === 0) {
      return 1;
    }
    return Math.ceil(pays.length / settings.slidesToShow);
  };

  

  const slidesToShow =
    selectedQuantity >= settings.slidesToShow
      ? settings.slidesToShow
      : selectedQuantity;

  const slidesToScroll =
    selectedQuantity >= settings.slidesToScroll
      ? settings.slidesToScroll
      : selectedQuantity;

  const filteredPays = pays.slice(0, selectedQuantity);

  return (
    <div className="bg_payment">
      <div className="row">
        <div className="col">
          <div className="lab_payment text-center">
            <p>Thanh toán thành công</p>
          </div>
        </div>
      </div>
      <div className="row mt-2">
        <div className="col col-2">
          <img src={alvin} alt="" className="img_lavin" />
        </div>
        <div className="col col-10 bg_payment1">
          <div className="bg_payment2">
            <div className="row mt-5">
              <div className="col col-1 text-center previous-buttons">
                <button
                  className="slider-button previous-button"
                  onClick={previous}
                >
                  <i className="bi bi-caret-left-fill"></i>
                </button>
              </div>
              <div className="col col-10">
                <Slider
                  ref={sliderRef}
                  {...settings}
                  slidesToShow={slidesToShow}
                  slidesToScroll={slidesToScroll}
                >
                  {filteredPays.length
                    ? filteredPays.map((pay) => (
                        <CardPay key={pay.idqr} pay={pay} />
                      ))
                    : null}
                </Slider>
              </div>
              <div className="col col-1 text-center next-buttons">
                <button className="slider-button next-button" onClick={next}>
                  <i className="bi bi-caret-right-fill" />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col col-1"></div>
              <div className="col col-5">
                <p className="totalcard text-start">
                  Số lượng: {filteredPays.length} Vé
                </p>
              </div>
              <div className="col col-5">
                <p className="pagepay text-end">
                  Trang {currentPage}/
                  {Math.ceil(filteredPays.length / slidesToShow)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-end">
          <button type="button" className="btn btn-danger">
            Tải vé
          </button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-danger">
            Gửi email
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
