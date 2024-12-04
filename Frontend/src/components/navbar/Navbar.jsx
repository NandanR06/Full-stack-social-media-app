import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import image from "../../assets/person/1.jpeg"
import "./Navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className="nav-left">
        <Link to={"/"} style={{textDecoration:"none"}}><span className="logo">ReadNote</span></Link>
      </div>
      <div className="nav-center">
        <SearchIcon className='search'/>
        <input placeholder='search post,video,profile' className="serch-input" />
      </div>
      <div className="nav-right">
        <div className="navbar-right-link">
            <span className="right-link">Homepage</span>
            <span className="right-link">Timeline</span>
            </div>
            <div className="navbar-icons">
                <div className="navbar-items">
                    <PersonIcon/>
                    <span className="navbar-icon-badge">1</span>
                </div>
                <div className="navbar-items">
                    <ChatIcon/>
                    <span className="navbar-icon-badge">2</span>
                </div>
                <div className="navbar-items">
                    <NotificationsIcon/>
                    <span className="navbar-icon-badge">1</span>
                </div>
           
        </div>
        <img src={image} alt="person" className='navbar-image' />
      </div>
    </div>
  )
}
