import React, { useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState([])
  const fnAdd = () => {
    let key = Date.now()
    _setArr([..._arr, key])
  }
  const fnDel = (e) => {
    let key = parseInt(e.target.getAttribute('data-n'))
    let arr = _arr.filter((v)=>{
      return v !== key
    })
    _setArr([...arr])
  }
  return (
    <>
      <button onClick={fnAdd}>배열추가</button>
      <hr />
      {
        _arr.map((v) => {
          return (
            <p key={v}>
              {v}
              <button onClick={fnDel} data-n={v}>삭제</button>
            </p>
          )
        })
      }
    </>
  );
};

export default App;