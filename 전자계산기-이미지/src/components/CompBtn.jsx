import { str,sorry,err,fnSetResult} from "../module/fnSetResult";

const CompBtn = ({ btnDataObj, _setResult,_setSorry,_setErr }) => {

  const fnChangeResult = (e) => {
    e.preventDefault()
    fnSetResult(e)
    _setResult( str ) //_result 변경하기
    _setSorry(sorry) //_sorry 변경하기
    _setErr(err)
  }//fnChangeResult

  return (
    <button
      onClick={fnChangeResult}
      data-fn={btnDataObj.fn}
      data-char={btnDataObj.id}
    >
      <img src={`./img/${btnDataObj.src}.png`} alt="" />
    </button>
  );
};

export default CompBtn;