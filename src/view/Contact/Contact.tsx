import React, { useState } from "react";
import "../Contact/Contact.css";
import { alex } from "../../assect/img/1index";
import { addContact } from "../../config/controller";
import { Modal } from "react-bootstrap";


function Contact() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [successModalOpen, setSuccessModalOpen] = useState(false);

  // Modal close handlers
  const closeErrorModal = () => setErrorModalOpen(false);
  const closeSuccessModal = () => setSuccessModalOpen(false);


  // Form submission handler
  const addNewContact = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validate input fields
    if (
      fullName.length === 0 ||
      fullName.length > 200 ||
      phone.length !== 10 ||
      !email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g) ||
      address.length === 0 ||
      address.length > 200
    ) {
      // Show error modal if any input is invalid
      setErrorModalOpen(true);
      return;
    }
    // Handle successful form submission
    addContact({ fullName, note, phone, email, address });
    setSuccessModalOpen(true);
  };
  return (
    <div className="contact">
      <Modal show={errorModalOpen} onHide={closeErrorModal} centered >
        <Modal.Body className="modal_error">
         Dữ liệu nhập vào không hợp lệ vui lòng nhập lại hoặc thử lại sau!
        </Modal.Body>
      </Modal>

      <Modal show={successModalOpen} onHide={closeSuccessModal} centered>
        <Modal.Body
          className="modal_success"
        >
          Gửi liên hệ thành công. Vui lòng kiên nhẫn đợi phản hồi từ chúng tôi,
          bạn nhé!
        </Modal.Body>
      </Modal>
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
              <form onSubmit={(e) => addNewContact(e)}>
                <div className="row">
                  <div className="col col-4 mt-4 ms-5">
                    <input
                      className="form-control  note-name"
                      type="text"
                      placeholder="Họ và tên"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="col col-7 mt-4 ms-4">
                    <input
                      className="form-control note-email"
                      type="text"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col col-4 mt-4 ms-5">
                    <input
                      className="form-control note-phone"
                      type="text"
                      placeholder="Số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="col col-7 mt-4 ms-4">
                    <input
                      className="form-control note-address"
                      type="text"
                      placeholder="Địa chỉ"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
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
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col">
                    <button className="button-send">Gửi liên hệ</button>
                  </div>
                </div>
              </form>
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
