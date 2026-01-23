import React,{useState} from 'react'

 function Login() {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[error,setError]=useState("");
    const[success,setSuccess]=useState("");


    const correctEmail="krupa.desai@teksacademy.com"
    const correctPassword ="krupa.desai";

    const handleSubmit=(e) =>{
        e.preventDefault();


        const enteredEmail = email.trim().toLocaleLowerCase();
        const enterdPassword = password.trim();

        //Validation
        if(!enteredEmail || !enterdPassword){
            setError("All fields are required ");
            setSuccess("");
            return;
        }


        //Authentication
        if(
            enteredEmail === correctEmail &&
            enterdPassword === correctPassword){
            setSuccess("Login Successful");
            setError("");
        }else{
            setError("Invalid Email or Password");
            setSuccess("");
        }
    };
  return (
    <div style={{maxWidth:"300px"}}>
<h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
             <label htmlFor="uemail">Email:</label>
            <input type="email"
            value={email}
            onChange={(e) =>
                setEmail(e.target.value)}
                onFocus={() => setError("")}/>
                <br/><br/>

                <label htmlFor="password">password:</label>
            <input type="password"
            value={password}
            onChange={(e) =>
                setPassword(e.target.value)}
                onFocus={() => {setError("");
                    setSuccess("");
                }
                }/>
                <br/><br/>

                <button type='submit'>Login</button>


        </form>

        {error&& <p style={{color:"red"}}>{error}</p>}

        {success && <p style={{color:"green"}}>{success}</p>}
    </div>
  )
}
export default Login;
