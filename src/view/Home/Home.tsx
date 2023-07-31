import React, { useState } from "react";
import "../Home/Home.css";
import { Dropdown } from "react-bootstrap";

import {
  balloon1,
  balloon2,
  balloon3,
  balloon4,
  balloon5,
  calendar,
  frame,
  group,
  group5,
  lisa,
  logo2,
  vector,
} from "../../assect/img/1index";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { DateSelector } from "../FormIk/DateSelector";

export const Home = () => {
  //event choose package
  const [selectValue, setSelectValue] = useState("");
  const selectInputValue = (value: string) => {
    setSelectValue(value);
  };

  //event handlePayment
  const navigate = useNavigate();

  const handlePay = () => {
    const phoneValue =
      (document.getElementById("phone") as HTMLInputElement)?.value || "";
    const emailValue =
      (document.getElementById("email") as HTMLInputElement)?.value || "";
    const quantityValue =
      parseInt(
        (document.getElementById("quantity") as HTMLInputElement)?.value || ""
      ) || 0;
    const fullNameValue =
      (document.getElementById("fullName") as HTMLInputElement)?.value || "";
    const dateValue =
      (document.getElementById("date") as HTMLInputElement)?.value || "";

    if (quantityValue < 1) {
      alert("Số lượng vé không được nhỏ hơn 1");
      return;
    }
    const queryParams = new URLSearchParams({
      email: emailValue,
      phone: phoneValue,
      quantity: quantityValue.toString(),
      fullName: fullNameValue,
      date: dateValue,
      select: selectValue,
    });

    navigate(`/pay?${queryParams}`);
  };

  return (
    <div className="home mt-5">
      <div className="row">
        <div className="col">
          <div className="row group1">
            <div className="col col-2">
              <img src={logo2} alt="" className="img-logo2" />
            </div>
            <div className="col col-2">
              <p className="text-lable1">ĐẦM SEN</p>
              <p className="text-lable2">PARK</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <img src={group} alt="" className="group-img" />
        <img src={lisa} alt="" className="lisa-img" />
        <img src={balloon1} alt="" className="balloon1-img" />
        <img src={balloon2} alt="" className="balloon2-img" />
        <img src={balloon3} alt="" className="balloon3-img" />
        <img src={balloon4} alt="" className="balloon4-img" />
        <img src={balloon5} alt="" className="balloon5-img" />
        <img src={vector} alt="" className="home_vector" />
        <img src={group5} alt="" className="home_group5" />
        <div className="col">
          <div className="note-book1">
            <div className="note-book2">
              <p className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
                volutpat, ut posuere ex facilisis.
                <br />
                <br />
                Suspendisse iaculis libero lobortis condimentum gravida. Aenean
                auctor iaculis risus, lobortis molestie lectus consequat a.
              </p>
              <p className="text-wrapper">
                <img src={frame} alt="" className="frame" /> Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-wrapper">
                <img src={frame} alt="" className="frame" /> Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>

              <p className="text-wrapper">
                <img src={frame} alt="" className="frame" /> Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>

              <p className="text-wrapper">
                <img src={frame} alt="" className="frame" /> Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="note-book3">
            <div className="note-book4">
              <div className="row mt-5 ms-5">
                <div className="col mt-5">
                  <input
                    id="select"
                    className="form-control note-wrapper"
                    type="text"
                    placeholder="Chọn gói"
                    value={selectValue}
                  />
                </div>
                <div className="col">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="warning"
                      className="button_dropdow"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item
                        id="familypackage"
                        onClick={() => selectInputValue("Gói gia đình")}
                      >
                        Gói gia đình
                      </Dropdown.Item>
                      <Dropdown.Item
                        id="singlepackage"
                        onClick={() => selectInputValue("Gói cá nhân")}
                      >
                        Gói cá nhân
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="row mt-3  ms-5">
                <div className="col ">
                  <input
                    className="form-control note-wrapper1"
                    type="number"
                    placeholder="Số lượng vé"
                    id="quantity"
                  />
                </div>
                <div className="col">
                  <DateSelector />
                </div>
                <div className="col">
                  <img src={calendar} alt="" className="img_calendar" />
                </div>
              </div>
              <div className="row mt-3  ms-5">
                <div className="col">
                  <input
                    className="form-control note-wrapper2"
                    type="text"
                    placeholder="Họ và tên"
                    id="fullName"
                  />
                </div>
              </div>
              <div className="row mt-3  ms-5">
                <div className="col">
                  <input
                    className="form-control note-wrapper2"
                    type="text"
                    placeholder="Số điện thoại"
                    id="phone"
                  />
                </div>
              </div>
              <div className="row mt-3  ms-5">
                <div className="col">
                  <input
                    className="form-control note-wrapper2"
                    type="text"
                    placeholder="Địa chỉ email"
                    id="email"
                  />
                </div>
              </div>
              <div className="row mt-5  ms-5">
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-danger btn_pt"
                    onClick={handlePay}
                  >
                    Đặt vé
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
