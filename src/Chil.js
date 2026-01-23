import React,{forwardRef} from 'react'

const Chil=forwardRef((props,ref)=>{
    return<input type='text' ref={ref}/>;
    
    
});
export default Chil;

