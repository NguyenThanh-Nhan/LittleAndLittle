import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './view/Home/Home';
import PageError from './view/PageError/PageError';
import Event from './view/Event/Event';
import Contact from './view/Contact/Contact';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<PageError />} />
      <Route path="/event" element={<Event />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
