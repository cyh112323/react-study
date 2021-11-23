import React, { useState } from 'react';

const App = () => {
  let [_name, _setName] = useState('홍길동')  //let name = '홍길동'

  let fn = (e) => {
    //name = e.target.innerText
    _setName(e.target.innerText)
  }
  return (
    <>
      <p>안녕하세요 {_name}입니다.</p>

      <button onClick={fn}>홍길동</button>
      <button onClick={fn}>아무개</button>
    </>
  );
};

export default App;