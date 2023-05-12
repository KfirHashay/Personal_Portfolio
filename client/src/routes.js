import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Home, NotFoundPage, Dashboard, Portfolio, Colors } from './containers';

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/portfolio" element={<Portfolio />} />
      <Route exact path="/colors" element={<Colors />} />

      <Route exact path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Routing;
