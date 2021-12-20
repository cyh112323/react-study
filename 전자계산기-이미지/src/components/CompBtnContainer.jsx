import { btnArr } from "../module/data";
import CompBtn from "./CompBtn";

const CompBtnContainer = ({ _setResult,_setSorry,_setErr }) => {
  return (
    <form className='btnContainer'>
      {
        btnArr.map((btnDataObj) => {
          return (
            <CompBtn
              key={btnDataObj.id}
              btnDataObj={btnDataObj}
              _setResult={_setResult}
              _setSorry={_setSorry}
              _setErr={_setErr}
            />
          )
        })
      }
    </form>
  );
};

export default CompBtnContainer;