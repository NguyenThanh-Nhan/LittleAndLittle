import { useEffect, useState } from "react";
import { group3, group4, trini, vector } from "../../assect/img/1index";
import "../Pay/Pay.css";
import { Link, useLocation } from "react-router-dom";

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
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col col-10 ms-5">
                <label htmlFor="exampleInputName" className="form-label">
                  Họ tên chủ thẻ
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col col-8 ms-5">
                <label htmlFor="exampleInputNumber" className="form-label">
                  Ngày hết hạn
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row">
              <div className="col col-2 ms-5">
                <label htmlFor="exampleInputNumber" className="form-label">
                  CVV/CVC
                </label>
                <input type="password" className="form-control" />
              </div>
            </div>
            <div className="row mt-5 text-center">
              <div className="col">
                <Link to={`/payment`}>
                  <button type="button" className="btn button_pay">
                    Thanh toán
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pay;
