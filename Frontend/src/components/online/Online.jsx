import React from 'react'
import './Online.css'


export default function Online({user}) {
  const pf= import.meta.env.VITE_APP_URL

  return (
    <div>
      <li className="right-bar-friend">
            <div className="right-bar-profile-container">
              <img src={`${pf}${user.profilePicture}`} className="right-bar-profile-image" />
              <span className="right-bar-online"></span>
            </div>
            <span className="right-bar-user-name">{user.username}</span>
          </li>
    </div>
  )
}
