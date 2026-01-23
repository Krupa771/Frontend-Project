import React,{useRef} from 'react';

function UseRefExample(){
    const inputRef =useRef();


    const handleClick=()=>{
        inputRef.current.focus();
        alert(inputRef.current.value);
    };
    return(
        <>
        <h2>UseRef Example</h2>
        <input type="text" ref={inputRef} placeholder='UseRef Input' />
        <br></br>
        <button onClick={handleClick}>Focus & show value</button>
        </>
    )
}
export default UseRefExample;

