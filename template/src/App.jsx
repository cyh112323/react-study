import React from 'react';
import CompFooter from './components/CompFooter';
import CompHeader from './components/CompHeader';
import CompHome from './components/CompHome';
import CompAbout from './components/CompAbout';
import CompPortfolio from './components/CompPortfolio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <CompHeader />
        <Routes>
          <Route path="/" element={<CompHome />} />
          <Route path="about" element={<CompAbout />} />
          <Route path="portfolio" element={<CompPortfolio /> } />
        </Routes>
      <CompFooter />
    </BrowserRouter>
  );
};

export default App;