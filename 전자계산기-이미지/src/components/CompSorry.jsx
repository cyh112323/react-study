import React from 'react';

const CompSorry = ({_setSorry}) => {
  const fnDisappear = ()=>{
    _setSorry(false)
  }
  return (
    <div className="sorry" onClick={fnDisappear}>
      <img src="./img/sorry.png" alt="" />
    </div>
  );
};

export default CompSorry;