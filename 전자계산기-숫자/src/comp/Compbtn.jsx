import React from 'react';
import {fnSetResult} from '../modules/fnSetResult';

const Compbtn = ({btnDataObj,_setResult}) => {
  const fnChangeResult = (e)=>{
    e.preventDefault()
    _setResult( fnSetResult(e) )
  }
  return (
    <button
      onClick={fnChangeResult} 
      className={btnDataObj.fn} 
      data-fn={btnDataObj.fn}
      data-char={btnDataObj.id}
    >
      {btnDataObj.char}
    </button>
  );
};

export default Compbtn;