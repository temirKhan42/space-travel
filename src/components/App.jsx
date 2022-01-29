import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Destination from './Destination.jsx';
import Crew from './Crew.jsx';
import Technology from './Technology.jsx';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
