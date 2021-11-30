import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState([
    {id:1, name: '홍'}, 
    {id:2, name: '김'}
  ])
  const refInput = useRef()
  const fnAdd = () => {
    /*  // 값 추가만 할때 사용
    let arr = [..._arr]
    arr.push('이')
    _setArr(arr)
    */

    /* // 값을 바꾸거나 빼거나 할때 사용
    let arr = _arr.map((v)=>{ // map 새로운 배열 만들때 씀 
      return v // = let arr = [..._arr] // 홍, 김
    })
    arr.push('이')
    _setArr(arr)
    */
    
    /* 
    let name = refInput.current.value
    let arr = [..._arr, name]
    // arr.push(name)
    _setArr(arr)
    */

    let name = refInput.current.value
    let obj = {
      id: Date.now(),
      name
    }
    _setArr([..._arr, obj])
  }

  const fnDel = (e)=>{
    let delID = parseInt(e.target.getAttribute('data-n'))
    let arr = _arr.filter((v)=>{
      return v.id !== delID
    })
    _setArr(arr)
  }

  return (
    <>
      <input ref={refInput} type="text" /> &nbsp;
      <button onClick={fnAdd}>추가하기</button>
      <hr />
      {
        _arr.map((v)=>{
          // return `${v}, `
          return (
            <li key={v.id}>
              {v.name}
              &nbsp;
              <button data-n={v.id} onClick={fnDel}>삭제</button>
            </li>
          )
        })
      }
    </>
  );
};

export default App;