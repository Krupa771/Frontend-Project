import React from 'react'
 function TernaryExample() {

    const isAdmin=true;
  return (
    <div>{isAdmin ? <h2>Admin Panel:</h2>:<h2>user Panel</h2>}</div>
  )
}

export default TernaryExample;
