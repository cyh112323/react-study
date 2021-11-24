import React, { useRef, useState } from 'react';

const App = () => {
  const [_reault, _setReault] = useState('...')
  const refInput1 = useRef()
  const refInput2 = useRef()
  const fn = ()=>{
    let num1 = parseInt(refInput1.current.value)
    let num2 = parseInt(refInput2.current.value)
    let result = num1+num2
    _setReault(result)
  }
  return (
    <>
      <p>
        <input ref={refInput1} type="text" />
        +
        <input ref={refInput2} type="text" />
        = <button onClick={fn}>결과보기</button>
      </p>
      <p className="output">
        결과는 {_reault} 입니다
      </p>
    </>
  );
};

export default App;