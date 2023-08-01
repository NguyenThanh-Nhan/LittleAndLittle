import React, { useEffect, useRef, useState } from "react";
import "../Payment/Payment.css";
import { alvin } from "../../assect/img/1index";
import { NewPayType } from "../../types/pay";
import Slider from "react-slick";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { paysCollection } from "../../config/controller";
import { useLocation } from "react-router-dom";
import html2canvas from "html2canvas";
import { Modal } from "react-bootstrap";
import emailjs from "emailjs-com";
import CardPay from "../CardPay/CardPay";

function Payment() {
  const [pays, setPays] = useState<NewPayType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const sliderRef = useRef<Slider>(null);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedQuantity = parseInt(queryParams.get("quantity") || "0");
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [emailLoading, setEmailLoading] = useState(false);
  const clearMessage = () => {
    setMessage({ text: "", type: "" });
  };

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

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSendEmail = () => {
    const emailInput = document.getElementById(
      "emailInput"
    ) as HTMLInputElement;
    const email = emailInput.value.trim();

    if (!email) {
      alert("Please enter a valid email.");
      return;
    }

    setEmailLoading(true);

    const selectedPays = filteredPays.slice(0, selectedQuantity);

    // Prepare an array of ticket images to send in the email
    const ticketImageUrls = selectedPays.map((pay) => pay.image);

    emailjs
      .send(
        "service_fm0xly8",
        "template_es0jwgp",
        {
          email,
          thankYouMessage: "Thank you for purchasing the ticket!",
          imageUrl: ticketImageUrls.join("\n\n"),
        },
        "FumtQtddVkVrLAFVO"
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response);
          setMessage({ text: "Email sent successfully!", type: "success" });
          setTimeout(clearMessage, 1000);
          setEmailLoading(false);
        },
        (error) => {
          console.error("Failed to send email.", error);
          setMessage({ text: "Failed to send email.", type: "error" });
          setTimeout(clearMessage, 1000);
          setEmailLoading(false);
        }
      );

    console.log("Selected Pays: ", selectedPays);
  };
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
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: selectedQuantity,
          col: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: selectedQuantity,
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

  const downloadAllCards = () => {
    const cardPayElements = document.querySelectorAll(".card-pay");

    // Convert the NodeList to an array for better handling
    const cardPayArray = Array.from(cardPayElements);

    // Create an array to store the promises from html2canvas
    const promises = cardPayArray.map((cardPayElement, index) =>
      html2canvas(cardPayElement as HTMLElement, {
        backgroundColor: null, // Set the background to transparent
      })
    );

    Promise.all(promises).then((canvasElements) => {
      canvasElements.forEach((canvasElement, index) => {
        // Create an image element to display the canvas
        const image = new Image();
        image.src = (canvasElement as HTMLCanvasElement).toDataURL("image/png");

        // Wait for the image to load before proceeding with the download
        image.onload = () => {
          const link = document.createElement("a");
          link.download = `ve_cong_${index}.png`;
          link.href = image.src;
          link.click();
        };
      });
    });
  };

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
          <button
            type="button"
            className="btn btn-danger"
            onClick={downloadAllCards}
          >
            Tải vé
          </button>
        </div>
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleShowModal}
          >
            Gửi email
          </button>
          <Modal show={showModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
              <Modal.Title>Nhập Email</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {message.text && (
                <div
                  className={`message ${
                    message.type === "success" ? "success" : "error"
                  }`}
                  style={{
                    textAlign: "center",
                    color: "green",
                  }}
                >
                  {message.text}
                </div>
              )}
              <input
                type={"email"}
                required
                placeholder="Enter Email"
                className="form-control"
                id="emailInput"
              />
            </Modal.Body>
            <Modal.Footer>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={handleSendEmail}
              >
                {emailLoading ? "Đang gửi email" : "Gửi email"}
              </button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Payment;
