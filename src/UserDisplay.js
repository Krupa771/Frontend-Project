import React,{useContext} from 'react'
import UserContext from './UserContext'

export default function UserDisplay() {

    const name=useContext(UserContext);
  return (
    <div>
        <h2>Welcome,{name}</h2>
    </div>
  )
}
