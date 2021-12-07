import React, { useEffect, useState } from 'react';

const Comp1 = ({_num,_setNum,_setInit}) => {
  const [_sec, _setSec] = useState(3)
  const fnshowNum = ()=>{
    let num = Math.floor(Math.random() * 100)
    _setNum(num)
    let sec = 3
    let intervalID = setInterval(()=>{
      _setSec(sec-=1)
      if(sec === 0){
        _setInit('comp2')
        clearInterval(intervalID)
      }
      console.log(sec);
    },1000)//setInterval
  }
  useEffect(()=>{
    console.log('comp1 마운트 되었습니다');
    document.querySelector('.comp1').classList.add('active')
    return(()=>{
      console.log('copm1이 언마운트 됩니다');
      })
  },[])
  return (
    <section className='comp1'>
      <h3>comp1</h3>
      <p>
        버튼을 클릭하고 화면에 출력되는 숫자를 기억해 주세요<br />
        (숫자는 <b>{_sec}</b>초뒤에 사라집니다)
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