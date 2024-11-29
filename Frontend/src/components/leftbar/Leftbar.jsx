import React from 'react'
import './Leftbar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EventIcon from '@mui/icons-material/Event';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SchoolIcon from '@mui/icons-material/School';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import ChatIcon from '@mui/icons-material/Chat';
import image1 from "../../assets/person/2.jpeg"
import image3 from "../../assets/person/3.jpeg"


export default function Leftbar() {
  return (
    <div className='left-bar'>
      <div className="left-wrapper">
        <ul className="left-bar-list">
          <li className="left-bar-list-item">
            <RssFeedIcon className="left-bar-icon" />
            <span className="left-bar-list-item-text">feed</span>
          </li>
          <li className="left-bar-list-item">
            <GroupIcon className="left-bar-icon"/>
            <span className="left-bar-list-item-text">group</span>
          </li>
          <li className="left-bar-list-item">
            <PlayCircleFilledWhiteIcon className="left-bar-icon" />
            <span className="left-bar-list-item-text">video</span>
          </li>
          <li className="left-bar-list-item">
            <BookmarkIcon className="left-bar-icon"/>
            <span className="left-bar-list-item-text">bookmark</span>
          </li>
          <li className="left-bar-list-item">
            <HelpOutlineIcon className="left-bar-icon"/>
            <span className="left-bar-list-item-text">help</span>
          </li>
          <li className="left-bar-list-item">
            <EventIcon className="left-bar-icon"/>
            <span className="left-bar-list-item-text">event</span>
          </li>
          <li className="left-bar-list-item">
            <ChatIcon className="left-bar-icon"/>
            <span className="left-bar-list-item-text">event</span>
          </li>
          <li className="left-bar-list-item">
            <WorkOutlineIcon className="left-bar-icon"/>
            <span className="left-bar-list-item-text">work</span>
          </li>
          <li className="left-bar-list-item">
            <SchoolIcon className="left-bar-icon"/>
            <span className="left-bar-list-item-text">course</span>
          </li>
        </ul>
        <button className='left-bar-btn'>Show more</button>
        <hr  className='left-bar-hr'/>
        <ul className="left-bar-friend-list">
          <li className="left-bar-friends">
            <img src={image1} className='left-bar-friend-img' alt="" />
            <span>Nandan Raghu</span>
          </li>
          <li className="left-bar-friends">
            <img src={image3} className='left-bar-friend-img' alt="" />
            <span>Nandan Raghu</span>
          </li>
          <li className="left-bar-friends">
            <img src={image1} className='left-bar-friend-img' alt="" />
            <span>Nandan Raghu</span>
          </li>
          <li className="left-bar-friends">
            <img src={image3} className='left-bar-friend-img' alt="" />
            <span> Raghu</span>
          </li>
          <li className="left-bar-friends">
            <img src={image1} className='left-bar-friend-img' alt="" />
            <span>Nandan </span>
          </li>
          <li className="left-bar-friends">
            <img src={image3} className='left-bar-friend-img' alt="" />
            <span>sharadha</span>
          </li>
          <li className="left-bar-friends">
            <img src={image1} className='left-bar-friend-img' alt="" />
            <span>sharadha</span>
          </li>
          <li className="left-bar-friends">
            <img src={image1} className='left-bar-friend-img' alt="" />
            <span>sharadha</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
