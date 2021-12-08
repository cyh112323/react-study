import React, { useEffect, useRef } from 'react';

const Comp2 = ({_num,_setInit}) => {
  const refinput = useRef()
  const fn = (e)=>{
    e.preventDefault()
    let input = parseInt(refinput.current.value)
    if(_num === input){
      alert('정답');
    }else{
      alert('오답');
    }
    _setInit('comp1')
  }
  useEffect(()=>{
    document.querySelector('.comp2').classList.add('active')
    console.log('comp2가 마운트 되었습니다');
    return (()=>{
      console.log('comp2가 언마운트 되었습니다');
    })
  },[])
  return (
    <section className='comp2'>
      <p>
        기억한 숫자를 입력하고 enter를 눌러주세요<br />
        정오답이 출력됩니다
      </p>
      <hr />
      <form onSubmit={fn}>
        <input ref={refinput} type="text" />
      </form>
    </section>
  );
};

export default Comp2;