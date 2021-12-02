import React, { useState } from 'react';
import CompOutput from './components/CompOutput';


const App = () => {
  const [_n,_setn] = useState(1)

  const fn =(e)=>{
    let n = _n
    let increase = parseInt(e.target.getAttribute('data-increase'))
    _setn(n + increase)
  }
  return (
    <>
      <p>버튼을 클릭하면 증감연산이 됩니다</p>
      <hr />
      <CompOutput prop_n={_n}/>
      <hr />
      <button data-increase='-1' onClick={fn}>1감소</button>
      <button data-increase='1' onClick={fn}>1증가</button>

    </>
  );
};

export default App;