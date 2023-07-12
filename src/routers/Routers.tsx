import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../view/Home/Home';
import PageErrorr from '../view/PageError/PageError';
import Contact from '../view/Contact/Contact';
// import Event from '../view/Event/Event';
import Card from '../view/Card/Card';

function Routers() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageErrorr />} />
      <Route path="/events" element={<Card />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default Routers