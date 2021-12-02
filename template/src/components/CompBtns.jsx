import React from 'react';   //rsc로 자동완성

const CompBtns = ({propFn}) => {
  return (
    <>
      <button data-increase='-1' onClick={propFn}>1감소</button>
      <button data-increase='1' onClick={propFn}>1증가</button>
    </>
  );
};

export default CompBtns;