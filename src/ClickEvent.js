function ClickEvent(){
    const handleclick=()=>{
        alert("Button Clicked good")
    };
    return(
        <>

        <h3>Click Event</h3>
        <button onClick={handleclick}>Click Me</button>
        </>
    )
}
export default ClickEvent;