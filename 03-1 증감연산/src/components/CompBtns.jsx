import React from 'react';

const Compbtns = ({ fn }) => {
  return (
    <>
      <button data-n={-1} onClick={fn}>-</button>
      &nbsp;
      <button data-n={1} onClick={fn}>+</button>
    </>
  );
};

export default Compbtns;