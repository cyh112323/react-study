import React, { useState } from 'react';

const App = () => {
  const [_result,_setResult] = useState('결과')

  const fn = ()=>{
    let oper = document.querySelector('.oper option:checked').value
    let num1_1 = document.querySelector('.num1-1 option:checked').value
    let num1_2 = document.querySelector('.num1-2 option:checked').value
    let num1 = parseInt(num1_1+num1_2)
    let num2_1 = document.querySelector('.num2-1 option:checked').value
    let num2_2 = document.querySelector('.num2-2 option:checked').value
    let num2 = parseInt(num2_1+num2_2)
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
      <p>숫자와 연산자를 선택하고 버튼을 누르면 결과가 출력됩니다</p>
      <p>
        <select  className="num1-1">
          <option defaultValue="1">1</option>
          <option defaultValue="2">2</option>
          <option defaultValue="3">3</option>
          <option defaultValue="4">4</option>
          <option defaultValue="5">5</option>
        </select>
        <select  className="num1-2">
          <option defaultValue="1">1</option>
          <option defaultValue="2">2</option>
          <option defaultValue="3">3</option>
          <option defaultValue="4">4</option>
          <option defaultValue="5">5</option>
        </select>

        &nbsp;
        <select className="oper">
          <option defaultValue="+">+</option>
          <option defaultValue="-">-</option>
          <option defaultValue="*">*</option>
          <option defaultValue="/">/</option>
        </select>
        &nbsp;

        <select  className="num2-1">
          <option defaultValue="1">1</option>
          <option defaultValue="2">2</option>
          <option defaultValue="3">3</option>
          <option defaultValue="4">4</option>
          <option defaultValue="5">5</option>
        </select>
        <select  className="num2-2">
          <option defaultValue="1">1</option>
          <option defaultValue="2">2</option>
          <option defaultValue="3">3</option>
          <option defaultValue="4">4</option>
          <option defaultValue="5">5</option>
        </select>
      </p>
      <button onClick={fn}>결과보기</button>
      <p>{_result}</p>
    </>
  );
};

export default App;