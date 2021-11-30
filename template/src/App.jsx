import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr,_setArr] = useState([])
  const refInput = useRef()
  const refInput2 = useRef()

  const fnAdd = ()=>{
    let name = refInput.current.value
    let obj = {
      id: Date.now(),
      name
    }
    _setArr([..._arr, obj])
  }
  
  const fnDel = (e)=>{
    let delID = parseInt(e.target.getAttribute('data-n'))
    let name = refInput2.current.value
    
    console.log(name,delID);
  }
  return (
    <>
      <p>이름을 추가하거나 제거하면 목록이 li객체로 출력됩니다</p>
      <input ref={refInput} type="text" /> &nbsp;
      <button onClick={fnAdd}>추가</button>
      <br />
      <input ref={refInput2} type="text" /> &nbsp;
      <button onClick={fnDel}>제거</button>
      <hr />
      <ul>
        {
          _arr.map((v)=>{
            return (
              <li key={v.id}>
                {v.name}
              </li>
            )
          })
        }
      </ul> 
    </>
  );
};

export default App;