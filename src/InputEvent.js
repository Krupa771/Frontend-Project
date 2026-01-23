import { useState } from "react";

function InputEvent(){
    const[text,SetText]=useState("");
    return(
        <>

        <h3>Input Event</h3>
        <input type="text" onChange={(e) => SetText(e.target.value)} 
        placeholder="Type here"/>
        <p>{text}</p>

        </>
    )
};
export default InputEvent;