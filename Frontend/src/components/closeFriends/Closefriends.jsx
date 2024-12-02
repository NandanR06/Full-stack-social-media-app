import React from 'react'
import "./Closefriends.css"


export default function Closefriends({user}) {
  return (
    <div>
      <li className="left-bar-friends">
            <img src={user.profilePicture} className='left-bar-friend-img' alt="" />
            <span>{user.username}</span>
          </li>
    </div>
  )
}
