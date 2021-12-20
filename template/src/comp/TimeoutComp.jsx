import React, { useEffect, useRef, useState } from 'react';

const TimeoutComp = ({ ddayObj }) => {

  const [_timer, _setTimer] = useState({})
  const intervalID = useRef()

  const fntimer = () => {
    let dday = new Date(ddayObj.year, ddayObj.month - 1, ddayObj.date)
    let ddayTimer = dday.getTime()
    let nowTimer = Date.now()
    let timer = ddayTimer - nowTimer

    let sec = 1000
    let min = sec * 60
    let hour = min * 60
    let day = hour * 24

    let restDay = parseInt(timer / day)//일
    let remainDay = timer % day
    let restHour = parseInt(remainDay / hour)//시간
    let remainHour = remainDay % hour
    let restMin = parseInt(remainHour / min)//분
    let remainMin = remainHour % min
    let restSec = parseInt(remainMin / sec)//초

    //console.log(restDay,restHour,restMin,restSec);
    _setTimer({
      restDay:restDay,
      restHour:restHour,
      restMin:restMin,
      restSec:restSec,
    })
  }//fntimer

  //life Cycle
  useEffect(() => {
    intervalID.current = setInterval(() => {
      fntimer()
    }, 1000)
    return(()=>{
      clearInterval(intervalID.current)
    })
  }, [])



  return (
    <>
      {
        (_timer.restDay < 0)
        ?
        <p>
          D-day 일정이 지났습니다
        </p>
        : 
        <p>
          <span>{_timer.restDay}</span>일&nbsp;
          <span>{_timer.restHour}</span>시간&nbsp;
          <span>{_timer.restMin}</span>분&nbsp;
          <span>{_timer.restSec}</span>초
          남았습니다
        </p>
      }
    </>
  );//return
};

export default TimeoutComp;