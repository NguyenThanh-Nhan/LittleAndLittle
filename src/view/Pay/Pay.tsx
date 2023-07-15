import React from "react";
import "../Pay/Pay.css";
import { group3, group4, trini, vector } from "../../assect/img/1index";
function Pay() {
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
                <input type="text" className="form-control" />
              </div>
              <div className="col col-2 mt-5">
                <label htmlFor="exampleInputQuantity" className="form-label">
                  Số lượng
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col col-4 mt-5">
                <label htmlFor="exampleInputDate" className="form-label">
                  Ngày sử dụng
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row ms-5 form_control">
              <div className="col col-6">
                <label htmlFor="exampleInputInf" className="form-label">
                  Thông tin liên hệ
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row ms-5 form_control">
              <div className="col col-4">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Số điện thoại
                </label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="row ms-5 form_control">
              <div className="col col-6">
                <label htmlFor="exampleInputEmail" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" />
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
                <button type="button" className="btn button_pay">
                Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pay;
