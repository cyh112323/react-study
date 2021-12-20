import { useState } from "react";
import CompBtnContainer from "./components/CompBtnContainer";
import CompErr from "./components/CompErr";
import CompOutput from "./components/CompOutput";
import CompSorry from "./components/CompSorry";

const App = () => {
  const [_result, _setResult] = useState('')
  const [_sorry, _setSorry] = useState(false)
  const [_err, _setErr] = useState(false)
  return (
    <>
      <main>
        <h1><img src="./img/title.png" alt="" /></h1>
        <CompOutput _result={_result} />
        <CompBtnContainer _setResult={_setResult} _setSorry={_setSorry} _setErr={_setErr} />
      </main>
      {(_sorry === true) && <CompSorry _setSorry={_setSorry} />}
      {(_err === true) &&<CompErr _setErr={_setErr} />}
    </>
  );
};

export default App;