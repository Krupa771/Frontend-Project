function ChildInput({username,
    setUsername}){
        return(
            <div>
                <h3>Enter Name</h3>
                <input type="text"
                value={username}
                onChange={(e)=> 
                    setUsername(e.target.value)
                }/>
            </div>
        )
    }
    export default ChildInput;