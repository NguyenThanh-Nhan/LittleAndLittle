import React from "react";
import "../Contact/Contact.css";
import { alex } from "../../assect/img/1index";

function Contact() {
  return (
    <div className="contact">
      <div className="row">
        <div className="col text-center mt-5">
          <p className="lable-1">Liên Hệ</p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <img src={alex} alt="" className="alex-img" />
        </div>
        <div className="col">
          <div className="bg-3">
            <div className="bg-4">
              <div className="row">
                <div className="col">
                  <p className="text-1 mt-4 ms-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse ac mollis justo. Etiam volutpat tellus quis
                    risus volutpat, ut posuere ex facilisis.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col col-4 mt-4 ms-5">
                  <input
                    className="form-control  note-name"
                    type="text"
                    placeholder="Họ và tên"
                  />
                </div>
                <div className="col col-7 mt-4 ms-4">
                  <input
                    className="form-control note-email"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-4 mt-4 ms-5">
                  <input
                    className="form-control note-phone"
                    type="text"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className="col col-7 mt-4 ms-4">
                  <input
                    className="form-control note-address"
                    type="text"
                    placeholder="Địa chỉ"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col col-11 mt-4 ms-5">
                  <div className="input-group">
                    <textarea
                      className="form-control"
                      aria-label="With textarea"
                      placeholder="lời nhắn"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col">
                  <button type="button" className="button-send">
                    Gửi liên hệ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="bg-5">
              <div className="bg-6">
                <div className="row">
                  <div className="col col-2">
                    <div className="icon1"> </div>
                  </div>
                  <div className="col col-9 mt-4">
                    <p className="text-lable">Địa chỉ</p>
                    <p>86/33 Âu Cơ, Phường 9, Quận Tân Bình, TP. Hồ Chí Minh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="bg-5">
                <div className="bg-6">
                  <div className="row">
                    <div className="col col-2">
                      <div className="icon2"> </div>
                    </div>
                    <div className="col col-10 mt-4">
                      <p className="text-lable">Email</p>
                      <p>investigate@your-site.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="bg-5">
                  <div className="bg-6">
                    <div className="row">
                      <div className="col col-2">
                        <div className="icon3"> </div>
                      </div>
                      <div className="col col-10 mt-4">
                        <p className="text-lable">Điện thoại</p>
                        <p>+84 145 689 798</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
