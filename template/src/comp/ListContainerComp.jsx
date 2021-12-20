import { Link } from 'react-router-dom';
import ListComp from './ListComp';

const ListContainerComp = ({_ddayArr,_setddayArr}) => {
  return (
    <main>
      <ul>
        {
          _ddayArr.map((ddayObj)=>{
            return(
              <ListComp 
                key={ddayObj.id}
                ddayObj={ddayObj}
                _ddayArr={_ddayArr}
                _setddayArr={_setddayArr}
              />
            )//return
          })
        }
      </ul>
      <Link to='add'>디데이 추가하기</Link>
    </main>
  );
};

export default ListContainerComp;