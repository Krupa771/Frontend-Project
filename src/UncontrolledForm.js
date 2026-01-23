import React,{useRef}from 'react'

 function UncontrolledForm() {

    const nameRef= useRef();
    const emailRef = useRef();


    const handleSubmit=(e) =>{
        e.preventDefault();

        alert(`Name:${nameRef.current.value}
            Email:${emailRef.current.value};
       ` )
    }
  return (
    <div>UncontrolledForm

        <h2>Uncontrolled Forms</h2>

        <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name:</label>
        <input type="text"
        placeholder=" Enter your Name"
        ref={nameRef}/>
        <br/><br/>

<label htmlFor="email">Email:</label>
<input 
type="email"
placeholder="Enter your Email id"
ref={emailRef}/>
<br/><br/>
    
    <button type="submit">Submit</button>
    </form>
    </div>
  )
}
export default UncontrolledForm;
