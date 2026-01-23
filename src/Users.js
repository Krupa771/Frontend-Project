import React ,{useState ,useEffect}from 'react'
import axios from "axios";
function Users() {

    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")

        .then((response)=>{
            setUsers(response.data);
        })

        .catch((error)=>{
            console.log(error);
        });
    },[])
return (
    <div>
<h2>User List</h2>
<ul>
    {users.map((post)=>(
        <li key={post.id}>
            <b>ID:</b>{post.id}<br/>
            <b>Title:</b>{post.title}<br/>
            <b>Body:</b>{post.body}
            </li>
    ))}
</ul>
</div>
  )
}

export default Users;
