import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddListComp from './comp/AddListComp';
import ListContainerComp from './comp/ListContainerComp';
import { dummyDdayArr } from './data/dummyArr';

const App = () => {
  //로컬스토리지 초기화
/*   window.localStorage.removeItem('jsonddayArr')
  console.log(
    window.localStorage.getItem('jsonddayArr')
  ); */

  const fnGetJson = () => {
    let jsonData = window.localStorage.getItem('jsonddayArr')
    if (jsonData) { // 로컬스토리지에 데이터가 존재하면
      let ddayArr = JSON.parse(jsonData) // json데이터를 자바스크립트 데이터로 변환
      return[...ddayArr]
    } else {// 로컬스토리지에 데이터가 없으면
      return [...dummyDdayArr]
    }
  }
  const [_ddayArr, _setddayArr] = useState(fnGetJson()) // useState(ddayArr)

  return (
    <BrowserRouter>
      <h1>D-Day</h1>
      <Routes>
        <Route path="/" element={
          <ListContainerComp _ddayArr={_ddayArr} _setddayArr={_setddayArr}/>
        } />
        <Route path="add" element={
          <AddListComp _ddayArr={_ddayArr} _setddayArr={_setddayArr}/>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default App;