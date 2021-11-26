import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr,_setArr] = useState([])
  const refName = useRef()
  const refAge = useRef()
  let gender = '남'

  const fnGender = (e)=>{
    gender = e.target.value 
  }
 
  const fn = ()=>{
    let obj = {
      name : refName.current.value,
      age : refAge.current.value,
      //gender : gender
      gender
    }
    _setArr([..._arr,obj])
    
  } //fn

  return (
    <>
      <p>이름과 나이와 성별을 입력하면 명단이 출력됩니다</p>
      이름 : <input ref={refName} type="text" /> <br />
      나이 : <input ref={refAge} type="text" /> <br />
      성별 : <input onChange={fnGender} type="radio" name="gender" defaultValue='남' />남 
             <input onChange={fnGender} type="radio" name="gender" defaultValue='여' />여 <br />
      <button onClick={fn}>추가하기</button>
      <hr />
      <p>
        {
          _arr.map((v)=>{ //v->{name : '홍', age:12}
            return `(이름:${v.name}, 나이:${v.age}, 성별:${v.gender})`
          })
        }
      </p>
    </>
  );
};

export default App;