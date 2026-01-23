import React from 'react'
import Childtwo from './Childtwo';

const Parenttwo = () =>{
    const student={
        name:"ABC",age:22,email:"abc@Gmail.com"
    };
    return(
        <div>
            <Childtwo student={student}/>
        </div>
    )

}

  

export default  Parenttwo;
