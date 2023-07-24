import { useEffect, useState } from "react";
import {
  group3,
  group4,
  sadface,
  trini,
  vector,
} from "../../assect/img/1index";
import "../Pay/Pay.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";

function Pay() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState("");
  const [fullName, setFullName] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [date, setDate] = useState("");
  const [price, setPrice] = useState(0);
  const [formattedDate, setFormattedDate] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // Define the missing variables
  const [cardNumber, setCardNumber] = useState("");
  const [cardname, setcardname] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const fakeBankCard = {
    cardNumber: "0123456789101112",
    cardName: "NGUYEN THANH NHAN",
    expirationDate: "12/2025",
    cvv: "123",
  };
  const formatCardNumber = (input: string) => {
    const cardNumberChunks = input.match(/.{1,4}/g);
    if (cardNumberChunks) {
      return cardNumberChunks.join(" ");
    } else {
      return input;
    }
  };

  const handlePayment = () => {
    // Check if the entered card details match the fake bank card
    if (
      cardNumber === fakeBankCard.cardNumber &&
      cardname === fakeBankCard.cardName &&
      expirationDate === fakeBankCard.expirationDate &&
      cvv === fakeBankCard.cvv
    ) {
      navigate("/payment");
    } else {
      setShowModal(true);
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setEmail(searchParams.get("email") || "");
    setPhone(searchParams.get("phone") || "");
    setQuantity(searchParams.get("quantity") || "");
    setFullName(searchParams.get("fullName") || "");

    setDate(searchParams.get("date") || "");

    // Format date as "dd/mm/yyyy"
    const dateParts = searchParams.get("date")?.split("-") || [];
    const formattedDate = dateParts.reverse().join("/");
    setFormattedDate(formattedDate);
    // Calculate price based on package type
    const packageType = searchParams.get("select");
    const parsedQuantity = parseInt(searchParams.get("quantity") || "0");

    if (packageType === "Gói gia đình") {
      setPrice(parsedQuantity * 120000);
    } else if (packageType === "Gói cá nhân") {
      setPrice(parsedQuantity * 150000);
    } else {
      setPrice(0);
    }
  }, [location.search]);

  return (
    <div className="bg-pay">
      <div className="row">
        <div className="col text-center">
          <p className="lab_pay">Thanh toán</p>
        </div>
      </div>
      <form>
        <div className="row mt-5">
          <div className="col col-1">
            <img src={trini} alt="" className="trini-img" />
          </div>
          <div className="col col-6 bg_note1">
            <img src={group3} alt="" className="group3_img" />
            <div className="bg_note2">
              <div className="row ms-5 mt-5">
                <div className="col col-4 mt-5">
                  <label htmlFor="exampleInputPrice" className="form-label">
                    Số tiền thanh toán
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    value={price}
                  />
                </div>
                <div className="col col-2 mt-5">
                  <label htmlFor="exampleInputQuantity" className="form-label">
                    Số lượng
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="quantity"
                    value={quantity}
                  />
                </div>
                <div className="col col-4 mt-5">
                  <label htmlFor="exampleInputDate" className="form-label">
                    Ngày sử dụng
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="date"
                    value={formattedDate}
                  />
                </div>
              </div>
              <div className="row ms-5 form_control">
                <div className="col col-6">
                  <label htmlFor="exampleInputInf" className="form-label">
                    Thông tin liên hệ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    value={fullName}
                  />
                </div>
              </div>
              <div className="row ms-5 form_control">
                <div className="col col-4">
                  <label htmlFor="exampleInputPhone" className="form-label">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    value={phone}
                  />
                </div>
              </div>
              <div className="row ms-5 form_control">
                <div className="col col-6">
                  <label htmlFor="exampleInputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col col-1">
            <img src={vector} alt="" className="vector_img" />
            <img src={group4} alt="" className="group4_img" />
          </div>
          <div className="col col-4 bg_note3">
            <div className="bg_note4">
              <div className="row mt-5">
                <div className="col col-10 ms-5 mt-5">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    Số thẻ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardnumber"
                    value={formatCardNumber(cardNumber)} // Format the card number in the input field
                    onChange={(e) =>
                      setCardNumber(e.target.value.replace(/\s/g, ""))
                    }
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-10 ms-5">
                  <label htmlFor="exampleInputName" className="form-label">
                    Họ tên chủ thẻ
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardname"
                    value={cardname}
                    onChange={(e) => setcardname(e.target.value.toUpperCase())}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-8 ms-5">
                  <label htmlFor="exampleInputDate" className="form-label">
                    Ngày hết hạn
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="expirationdate"
                    value={expirationDate}
                    onChange={(e) => setExpirationDate(e.target.value)}
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-2 ms-5">
                  <label htmlFor="exampleInputNumber" className="form-label">
                    CVV/CVC
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
              <div className="row mt-5 text-center">
                <div className="col">
                  <button
                    type="button"
                    className="btn button_pay"
                    onClick={handlePayment}
                  >
                    Thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Payment Failure */}
          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header className="modal_header">
              <Modal.Title>
                <img src={sadface} alt="" className="img-sadface"/>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Hình như đã có lỗi xảy ra khi thanh toán... </p>
              <p>
                Vui lòng kiểm tra lại thông tin liên hệ, thông tin thẻ và thử
                lại.
              </p>
            </Modal.Body>
          </Modal>
        </div>
      </form>
    </div>
  );
}

export default Pay;
