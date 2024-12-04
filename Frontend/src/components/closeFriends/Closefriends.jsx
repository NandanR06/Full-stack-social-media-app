import React from 'react'
import "./Closefriends.css"


export default function Closefriends({user}) {
  const pf= import.meta.env.VITE_APP_URL
  
  
  return (
    <div>
      <li className="left-bar-friends">
            <img src={pf + user.profilePicture} className='left-bar-friend-img' alt="" />
            <span>{user.username}</span>
          </li>
    </div>
  )
}
