import React from 'react';

const CompOutput = (props) => {
  let strArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '*', '/', '(', ')']
  let imgArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'dot', 'plus', 'minus', 'multi', 'divide', 'blank_l', 'blank_r']
  return (
    <div className="output">
      <div className='inner'>
        {
          props._result.split('').map((v, i) => {
            let index = strArray.indexOf(v)
            let imgFileName = imgArray[index]
            return (
              <img key={i} src={`./img/${imgFileName}.png`} alt="" />
            )
          })
        }
      </div>
    </div>
  );
};

export default CompOutput;