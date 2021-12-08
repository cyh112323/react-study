import React from 'react';
import { Link } from 'react-router-dom';

const CompHeader = () => {
  return (
    <header>
      <h1>Single Page Web</h1>
      <nav>
        <Link to="/">home</Link>
        &nbsp;
        <Link to="about">about</Link>
        &nbsp;
        <Link to="portfolio">portfolio</Link>
      </nav>
      <hr />
    </header>
  );
};

export default CompHeader;