import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../view/Home/Home";
import PageErrorr from "../view/PageError/PageError";
import Contact from "../view/Contact/Contact";
import Event from "../view/Event/Event";
import EventDetail from "../view/EventDetail/EventDetail";
import Pay from "../view/Pay/Pay";
import Payment from "../view/Payment/Payment";

function Routers() 
{
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/pay" element={<Pay />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageErrorr />} />
      <Route path="/events" element={<Event />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default Routers;
