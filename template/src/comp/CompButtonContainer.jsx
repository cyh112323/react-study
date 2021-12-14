import {btnArr} from '../modules/data';
import Compbtn from './Compbtn';

const CompButtonContainer = ({_setResult}) => {
  return (
    <form className='btnContainer'>
      {
        btnArr.map((btnDataObj) => {
          return (
            <Compbtn 
            key={btnDataObj.id} 
            btnDataObj={btnDataObj} 
            _setResult={_setResult}
            />
          )
        })
      }
    </form>
  );
};

export default CompButtonContainer;