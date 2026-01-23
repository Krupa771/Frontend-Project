import React,{useState} from 'react'
import ChildInput from './ChildInput';
import ChildDisplay from './ChildDisplay';
 function Parentt() {

    const [username,setUsername]=useState("");
  return (
    <div>
        <ChildInput username={username}
        setUsername={setUsername}/>
        <ChildDisplay username={username}
        />
    </div>
  )
}

export default Parentt;
