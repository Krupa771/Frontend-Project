import React from 'react'
const Childthree = (props) =>{
return (



    {*/  PROPS WITH OBJECT */}
    <div>
        <h2>
            Skills
        </h2>
        <ul>
            {props.skills.map((skill,index)=>{
                return <li key={index}>{skill}</li>;
            })}
        </ul>
    </div>
  )
}

export default Childthree;
  

