export const getUsers =() =>{

    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res=> res.json())
    .then(data=>console.log(data))
    return(
        <div>
           
        </div>

    )
};