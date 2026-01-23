import { useRef } from "react"

import Chil from "./Chil"
 function ForwardRefExample(){
    const chilRef =useRef();
    const focusChilInput=() =>{
        chilRef.current.focus();
    };
    return(
     <>
        <h2>Forward Ref Example</h2>
        <Chil ref={chilRef}/>
        <br/><br/>
        <button onClick={focusChilInput}>Focus</button>
        </>
    )
 }
export default ForwardRefExample;

