import React from 'react';

const CompErr = ({_setErr}) => {
  const fnDisappear = ()=>{
    _setErr(false)
  }
  return (
    <div className='err' onClick={fnDisappear}>
      <img src="./img/oops.png" alt="" />
    </div>
  );
};

export default CompErr;