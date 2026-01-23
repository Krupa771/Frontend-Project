import React,{Component} from 'react'
class CallbackRefExample extends Component{
    focusInput=()=>{
        this.inputElement.focus();
    };
    render(){
        return(
            <>
            
            <h2>Call Bck Ref</h2>
    
<input 
type='text' 
ref={(el)=>(this.inputElement=el)} placeholder='enter'/>
            <br/><br/>
            <button onClick={this.focusInput}>Focus</button>
            </>
            
        );
    }
}

export default CallbackRefExample;

