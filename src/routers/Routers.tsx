import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../view/Home/Home";
import PageErrorr from "../view/PageError/PageError";
import Contact from "../view/Contact/Contact";
// import Event from '../view/Event/Event';
import Event from "../view/Event/Event";
import EventDetail from "../view/EventDetail/EventDetail";

function Routers() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageErrorr />} />
      <Route path="/events" element={<Event />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events/:id" element={<EventDetail />} />
    </Routes>
  );
}

export default Routers;
