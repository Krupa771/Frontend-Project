import React from 'react'

function UserCard({user}) {
  return (
    <div className='bg-white shadow-md rounded-lg p-5 m-3 w-64'>
        <img src={user.avatar} alt={user.name} className='w-24 h-24 rounded-full mx-auto'/>
        <h2 className='text-xl font-bold text-center mt-3'>{user.name}</h2>
        <p className='text-gray-500 text-center'>{user.email}</p>
<button className='bg-blue-500 text-white px-4 py-4 mt-4 rounded w-full hover:bg-green-600'>
    View Profiles
</button>

    </div>
  )
}
export default  UserCard;
