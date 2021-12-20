import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const AddListComp = ({_ddayArr,_setddayArr}) => {

  const navi = useNavigate()
  const refDdayName = useRef()
  const refDdayDate = useRef()
  const fnCancel = (e) => {
    e.preventDefault()
    navi('/')//목록으로 이동 
  }

  const fnAddDday = (e) => {
    e.preventDefault()
    
    let ddayName = refDdayName.current.value
    let ddayDate = refDdayDate.current.value//2021-12-25
    let ddayDateArr = ddayDate.split('-') //[2021,12,25]
    let year = parseInt(ddayDateArr[0]) //2021
    let month = parseInt(ddayDateArr[1]) //12
    let date = parseInt(ddayDateArr[2]) //25
    let ddayObj = {
      id:Date.now(),//타임스탬프
      ddayName,
      year,
      month,
      date,
    }
    //입력오류검사 ----------------------------------
    if(ddayName===''){//이름을 입력하지 않았더라면
      alert('디데이 제목을 입력해주세요')
      refDdayName.current.focus()
      return false;
    }
    if(ddayDate===''){//날짜를 입력하지 않았더라면
      alert('디데이 일자를 입력해주세요')
      refDdayDate.current.focus()
      return false;
    }

    //목록(배열)추가-----------------------------------
    let ddayArr =[..._ddayArr,ddayObj]
    _setddayArr(ddayArr)
    //디데이배열을 하드디스크에 저장------------
    let jsonData = JSON.stringify(ddayArr)
    window.localStorage.setItem('jsonddayArr',jsonData)

    alert('디데이 목록이 추가되었습니다.')
    navi('/')//목록으로 이동 
  }//fn
  return (
    <main>
      <form>
        <p>
          <label htmlFor='ddatName'>디데이명</label>
          <input id='ddayName' ref={refDdayName} type="text" />
        </p>
        <p>
          <label htmlFor='ddatName'>날짜</label>
          <input id='ddaydate' ref={refDdayDate} type="date" />
        </p>
        <p>
          <button onClick={fnAddDday}>추가하기</button> &nbsp;
          <button onClick={fnCancel}>취소하기</button>
        </p>
      </form>
    </main>
  );
};

export default AddListComp;