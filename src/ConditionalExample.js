import React from 'react'

 function ConditionalExample() {
    const isLoggedIn=false;


    let message;
    if(isLoggedIn){
        message=<h2>Welcome User</h2>
    }else{
        message=<h2>Please Login</h2>
    }
  return (
    <div>{message}</div>
  )
}

export default ConditionalExample;
