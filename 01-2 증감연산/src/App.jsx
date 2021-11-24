import React, { useState } from 'react';

const App = () => {
  const[_num, _setNum] = useState(1)
  const fn = ()=>{
    _setNum(_num+1)
  }
  return (
    <>
      <p>{_num}</p>
      <button onClick={fn}>1씩증가</button>
    </>
  );
};

export default App;