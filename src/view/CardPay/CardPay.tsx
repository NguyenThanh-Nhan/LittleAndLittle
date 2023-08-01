import { NewPayType } from "../../types/pay";
import "./CardPay.css";
import { tick } from "../../assect/img/1index";

function CardPay({ pay }: { pay: NewPayType }) {
  return (
    <div className="card card-pay" data-cardpay-id={pay.idqr}>
      <img src={pay.image} className="img_cardpay" alt="eventImage" />
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
}

export default CardPay;
