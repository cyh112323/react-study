import React, { useEffect, useState } from 'react';
import TimeoutComp from './TimeoutComp';


const ListComp = ({ddayObj,_ddayArr,_setddayArr}) => {

  const fnDelList = ()=>{
    let ddayArr = _ddayArr.filter((v)=>{
      return (v.id !== ddayObj.id)
    })
    _setddayArr([...ddayArr])


    //디데이배열을 하드디스크에 저장------------
    let jsonData = JSON.stringify(ddayArr)
    window.localStorage.setItem('jsonddayArr',jsonData)
  }//fn


  return (
    <li>
      <h3>{ddayObj.ddayName}</h3>
      <time>
        <span>{ddayObj.year}년</span>
        <span>{ddayObj.month}월</span>
        <span>{ddayObj.date}일</span>
      </time>
      <TimeoutComp ddayObj={ddayObj}/>
      <button onClick={fnDelList}>삭제</button>
    </li>
  );
};

export default ListComp;