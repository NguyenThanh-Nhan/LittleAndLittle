import React, { forwardRef, useState } from "react";
import { NewPayType } from "../../types/pay";
import "./CardPay.css";
import { tick } from "../../assect/img/1index";


interface IProps {
  pay: NewPayType;
}
const CardPay = forwardRef<HTMLImageElement, IProps>(({ pay }, ref) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div className="card card-pay">
      <img
        ref={ref}
        src={pay.image}
        className={`img_cardpay ${imageLoaded ? "img_loaded" : ""}`}
        alt="eventImage"
        onLoad={handleImageLoad}
      />
      <div className="card-body card_body_pay">
        <div className="idqr">
          <p>{pay.idqr}</p>
        </div>
        <div className="label">
          <p>{pay.label}</p>
        </div>
        <div className="dashed">
          <p>---</p>
        </div>
        <div className="date_pay">
          <p>
            Ngày sử dụng: <span>{pay.date}</span>
          </p>
        </div>
        <div className="tick mt-4">
          <img src={tick} alt="" className="tick_card" />
        </div>
      </div>
    </div>
  );
});

export default CardPay;
