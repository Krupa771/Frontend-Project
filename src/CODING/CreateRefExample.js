import React ,{Component}from 'react'

class CreateRefExample extends Component{
    constructor(){
     super();
     alert("constructor called")
     this.inputRef=React.createRef();   
    }
    focusInput=()=>{
        this.inputRef.current.focus();
    };
    render(){
        return(
            <>
            <h2>Create Ref Example</h2>
            <input 
            type="text" 
            ref={this.inputRef} 
            placeholder="createRefinput"
            />
            <br/><br/>

            <button onClick={this.focusInput}> Focus Input

            </button>
            </>
        );
    }
}
export default CreateRefExample;

