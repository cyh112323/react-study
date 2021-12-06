import React, { useRef, useState } from 'react';

const CompInput = ({_num}) => {
  const arrOption = []
  for (let i = 0; i <= 9; i++) {
    arrOption.push(i) //0~9
  }
  const sel1 = useRef()
  const sel2 = useRef()

  const fnCheck = ()=>{
    let num1 = parseInt(sel1.current.value)
    let num2 = parseInt(sel2.current.value)
    let result = num1 + num2
    if(result === _num ){
      alert('정답')
    }else{
      alert('오답')
    }
  }

  return (
    <>
      <select ref={sel1}>
        {
          arrOption.map((v) => {
            return <option key={v} value={v}>{v}</option>
          })
        }
      </select>
      +
      <select ref={sel2}>
        {
          arrOption.map((v) => {
            return <option key={v} value={v}>{v}</option>
          })
        }
      </select>
      <br />
      <br />
      <button onClick={fnCheck}>결과</button>
    </>
  );
};

export default CompInput;