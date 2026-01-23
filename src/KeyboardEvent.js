function KeyboardEvent(){
    return(
        
        <>

        <h3>Keyboard Event</h3>
        <input type="text" onKeyDown={(e) => console.log("Key:",e.key)}
        placeholder="Press any key"/>
        
        </>
    )
};
export default KeyboardEvent;
