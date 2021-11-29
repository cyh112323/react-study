import React, { useRef, useState } from 'react';

const App = () => {
  const [_arr, _setArr] = useState([])

  const refName = useRef()
  const refAge = useRef()
  let gender

  const fnAddArr = () => {
    let name = refName.current.value
    let age = refAge.current.value
    let obj = {
      name,
      age,
      gender,
    }
    _setArr([..._arr, obj])
  }

  const fnGender = (e) => {
    gender = e.target.value
  }


  return (
    <>
      <p>이름 ,나이,성별을 입력하고 추가버튼을 누르면 성별이 구분되어 출력됩니다</p>
      이름 : <input ref={refName} type="text" /> <br />
      나이 : <input ref={refAge} type="text" /> <br />
      성별 : <input onChange={fnGender} type="radio" name="gender" defaultValue='남' />남
      <input onChange={fnGender} type="radio" name="gender" defaultValue='여' />여
      <br />
      <button onClick={fnAddArr}>추가하기</button>
      <hr />
      남자명단
      <p>
        {
          _arr.map((v) => {
            if (v.gender === '남') {
              return `(이름 : ${v.name}, 나이 : ${v.age})`
            }
          })
        }
      </p>
      <hr />
      여자명단
      <p>
        {
          _arr.map((v) => {
            //return (v.gender === '여')? `(이름 : ${v.name}, 나이 : ${v.age})`: null
            return (v.gender === '여') && `(이름 : ${v.name}, 나이 : ${v.age})`
          })
        }
      </p>
    </>
  );
};

export default App;