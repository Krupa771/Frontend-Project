import React from 'react'
import Childthree from './Childthree';



const Parentthree = () =>{
    const skills =["HTML","CSS","JS","React Js"];
    return(
        <div>
            <Childthree skills={skills}/>
        </div>
    )
}
export default  Parentthree;
  
