import React,{useState} from 'react'

 function ControlledForm() {
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        message:"",
    });
    const handleChange =(e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };

    const handleSubmit =(e) =>{
        e.preventDefault();
        alert(`Username:${formData.username}
        Email:${formData.email}
        Meassage:${formData.message}`          
    );
    };
  return (
    <div>ControlledForm

    <form onSubmit={handleSubmit}>
        <label htmlFor="username">Name:</label>
        <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        onFocus={() => console.log("Focused")}
        onBlur={()=>console.log("Blurred")}
        />

        <br/><br/>
        <label htmlFor="email">Email-id:</label>

        <input
        type="email"
        name="email"
        placeholder="Enter your email "
        value={formData.email}
        onChange={handleChange}/>
        
        <br/><br/>



<label htmlFor="message">Message:</label>

        <input
        type="messsage"
        placeholder="Messaga write"
        value={formData.message}
        onChange={handleChange}/>

        <br/><br/> 


        <textarea
        name="message"
        placeholder="Messaga"
        value={formData.message}
        onChange={handleChange}/>

        <br/><br/>

        <button type="submit"> Submit </button>
       
        
        </form>
        </div>
           
       
  )
};
export default ControlledForm;
