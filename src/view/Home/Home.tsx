import React, { useState } from "react";
import "../Home/Home.css";
import {
  balloon1,
  balloon2,
  balloon3,
  balloon4,
  balloon5,
  calendar,
  group,
  lisa,
  logo2,
} from "../../assect/img/1index";
import { Dropdown } from "react-bootstrap";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const updateInputValue = (value: string) => {
    setInputValue(value);
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
        <div className="col">
          <div className="note-book1">
            <p className="lorem-ipsum-dolor mt-5 ms-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse ac mollis justo. Etiam volutpat tellus quis risus
              volutpat, ut posuere ex facilisis.
              <br />
              <br />
              Suspendisse iaculis libero lobortis condimentum gravida. Aenean
              auctor iaculis risus, lobortis molestie lectus consequat a.
            </p>
            <p className="text-wrapper ms-4">
              <i className="bi bi-star-fill"></i> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p className="text-wrapper ms-4">
              <i className="bi bi-star-fill"></i> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <p className="text-wrapper ms-4">
              <i className="bi bi-star-fill"></i> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <p className="text-wrapper ms-4">
              <i className="bi bi-star-fill"></i> Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="col">
          <div className="note-book2">
            <div className="row mt-5 ms-5">
              <div className="col">
                <input
                  id="family-package-input"
                  className="note-wrapper"
                  type="text"
                  placeholder="Chọn gói"
                  value={inputValue}
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
                      href="#/action-1"
                      onClick={() => updateInputValue("Gói gia đình")}
                    >
                      Gói gia đình
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#/action-2"
                      onClick={() => updateInputValue("Gói cá nhân")}
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
                  className="note-wrapper1"
                  type="text"
                  placeholder="Số lượng vé"
                />
              </div>
              <div className="col">
                <input
                  className="note-wrapper1"
                  type="date"
                  placeholder="Ngày sử dụng"
                />
              </div>
              <div className="col">
                <img src={calendar} alt="" className="img_calendar" />
              </div>
            </div>
            <div className="row mt-3  ms-5">
              <div className="col">
                <input
                  className="note-wrapper2"
                  type="text"
                  placeholder="Họ và tên"
                />
              </div>
            </div>
            <div className="row mt-3  ms-5">
              <div className="col">
                <input
                  className="note-wrapper2"
                  type="text"
                  placeholder="Số điện thoại"
                />
              </div>
            </div>
            <div className="row mt-3  ms-5">
              <div className="col">
                <input
                  className="note-wrapper2"
                  type="text"
                  placeholder="Địa chỉ email"
                />
              </div>
            </div>
            <div className="row mt-5  ms-5">
              <div className="col">
                <button type="button" className="btn button_put">
                  Đặt vé
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
