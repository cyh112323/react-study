import React, { useState } from 'react';
import CompOutput from './components/CompOutput';
import Compbtns from './components/Compbtns';

const App = () => {
  const [_num,_setnum] = useState(0)
  const fn = (e)=>{
    let num = _num
    let increase = parseInt(e.target.getAttribute('data-n'))
    _setnum(num+increase)
  }
  return (
    <>
      <p>증감연산</p>
      <hr />
      <CompOutput _num={_num}/>
      <hr />
      <Compbtns fn={fn}/>

    </>
  );
};

export default App;