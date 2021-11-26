import React, { useRef, useState } from 'react';

const App = () => {
  const [_result, _setResult] = useState()
  const sel1_1 = useRef()
  const sel1_2 = useRef()
  const sel2_1 = useRef()
  const sel2_2 = useRef()
  const oper = useRef()
  const fn = ()=>{
    let num1 = parseInt(sel1_1.value + sel1_2.value)
    let num2 = parseInt(sel2_1.value + sel2_2.value)
    let result
    if(oper === "+"){
      result = num1 + num2
    }else if(oper === "-"){
      result = num1 - num2
    }else if(oper === "*"){
      result = num1 * num2
    }else{
      result = num1 / num2
    }
    _setResult (result)
  }
  return (
    <>
      <p>숫자와 연산자를 선택하고 버튼을 누르면 결과과 출력됩니다</p>
      <p>
        <select ref={sel1_1} className="num1-1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select ref={sel1_2} className="num1-2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        &nbsp;
        <select ref={oper} className="oper">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        &nbsp;
        <select ref={sel2_1} className="num2-1">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <select ref={sel2_2} className="num2-2">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </p>
      <button onClick={fn}>결과보기</button>
      <p>결과: {_result} </p>
    </>
  );
};

export default App;