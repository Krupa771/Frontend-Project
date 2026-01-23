function MouseEvent(){
    return(
        <>
        <h3>Mouse Events</h3>
        <div 
        onMouseEnter={() => console.log("Mouse Entered")}
        onMouseLeave={() => console.log("Mouse Left")}
        style={{
            width:"150px",
            height:"60px",
            background:"lightblue",
            padding:"20px",

        }}
        >
            Hover Me
        </div>
        </>
    )
}
export default MouseEvent;