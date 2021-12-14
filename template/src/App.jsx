import { useState } from "react";
import CompButtonContainer from './comp/CompButtonContainer';
import CompOutput from './comp/CompOutput';


const App = () => {
  const [_result, _setResult] = useState()
  return (
    <>
      <main>
        <CompOutput _result={_result} />
        <CompButtonContainer _setResult={_setResult} />
      </main>
    </>
  );
};

export default App;