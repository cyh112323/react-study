import React, { useRef, useState } from 'react';

const App = () => {
  const[_result,_setResult] = useState(0)
  const refInput1 = useRef()
  const refInput2 = useRef()
  let fn = ()=>{
    let num1 = parseInt(refInput1.current.value)
    let num2 = parseInt(refInput2.current.value)
    let result = num1 +num2
    _setResult(result)
  }
  return (
    <>
      <p>
        <input ref={refInput1} onChange={fn} type="text" defaultValue='0' />
        +
        <input ref={refInput2} onChange={fn} type="text" defaultValue='0' />
      </p>
      <p>
        {_result}
      </p>
    </>
  );
};

export default App;