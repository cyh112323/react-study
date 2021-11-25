import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr,_setArr] = useState( [] )
  const refInput = useRef() 

  const fn = (e)=>{
    e.preventDefault()
    let name = refInput.current.value
    _setArr([..._arr,name])
  }
  return (
    <>
      <form onSubmit={fn}>
        이름을 입력하세요 : <input ref={refInput} type="text" />
      </form>
      <hr />
      <p>{_arr}</p>
    </>
  );
};

export default App;