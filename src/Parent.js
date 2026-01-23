import React from 'react'
import Child from './Child';

const Parent=()=>{
  return(
    <div>
      <Child name="Peter" age={35}/>
    </div>
  );
};
export default Parent;