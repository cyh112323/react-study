import React from 'react';

const Comp1 = ({_num,_setNum}) => {
  const fnshowNum = ()=>{
    let num = Math.floor(Math.random() * 100)
    _setNum(num)
  }
  return (
    <section className='comp1'>
      <h3>comp1</h3>
      <p>
        버튼을 클릭하고 화면에 출력되는 숫자를 기억해 주세요<br />
        (숫자는 3초뒤에 사라집니다)
      </p>
      <hr />
      <p>숫자 : {_num}</p>
      <hr />
      {/*
        (!_num)//_num값이 없다라면
        ? <button onClick={fnshowNum}>숫자생성</button> //버튼을 출력한다
        : null //아무것도 출력하지 않는다
      */}
      {
        (!_num) && <button onClick={fnshowNum}>숫자생성</button>
      }
      
    </section>
  );
};

export default Comp1;