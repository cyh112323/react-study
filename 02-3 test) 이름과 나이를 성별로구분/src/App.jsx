import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr1,_setArr1] = useState([])
  const [_arr2,_setArr2] = useState([])
  const refName = useRef()
  const refAge = useRef()
  let gender

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
    if(gender === '남'){
      _setArr1([..._arr1,obj])
    }else{
    _setArr2([..._arr2,obj])
    }
  }

  return (
    <>
      <p>이름 ,나이,성별을 입력하고 추가버튼을 누르면 성별이 구분되어 출력됩니다</p>
      이름 : <input ref={refName} type="text" /> <br />
      나이 : <input ref={refAge} type="text" /> <br />
      성별 : <input onChange={fnGender} type="radio" name="gender" defaultValue='남' />남 
             <input onChange={fnGender} type="radio" name="gender" defaultValue='여' />여 
      <br />
      <button onClick={fn}>추가하기</button>
      <hr />
      남자명단
      <p>
        {
        _arr1.map((v)=>{
          return `(이름:${v.name}, 나이:${v.age}, 성별:${v.gender})`
        })
        }
      </p>
      <hr />
      여자명단
      <p>
      {
        _arr2.map((v)=>{
          return `(이름:${v.name}, 나이:${v.age}, 성별:${v.gender})`
        })
        }
      </p>
    </>
  );
};

export default App;