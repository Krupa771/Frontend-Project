import React from 'react'
import UserCard from './UserCard'

export default function UserList() {
    const users =[
{id:1 , name:"Shaik Afreen", email:"afreen@gmail.com",avatar:"https://i.pravatar.cc/150?img=47"},
{id:2,name:"HemaAnjali",email:"Hemananjali21@gmail.com",avatar:"https://i.pravatar.cc/150?img=40"},
 {id:3,name:"M Teja",email:"TejaM@gmail.com",avatar:"https://i.pravatar.cc/150?img=4"}
    ];
  return (
    <div className='flex justify-center'>
        {users.map((user)=>(
            <UserCard key={user.id} user={user}/>
        ))}
    </div>
  )
}
