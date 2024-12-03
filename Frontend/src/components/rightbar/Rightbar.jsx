import React from 'react'
import "./Rightbar.css"
import gift from '../../assets/gift.png'
import adds from "../../assets/ad.png"
import Online from '../online/Online'
import friend1 from "../../assets/person/1.jpeg"
import friend2 from "../../assets/person/2.jpeg"
import friend3 from "../../assets/person/3.jpeg"
import friend4 from "../../assets/person/4.jpeg"
import friend5 from "../../assets/person/5.jpeg"
import friend6 from "../../assets/person/6.jpeg"



import { Users } from "../../components/post/dummyData"


export default function Rightbar({profile}) {


  const HomePage = () => {
    return (
      <>
        <div className="birthday-container">
          <img src={gift} alt="" className="birth-day-img" />
          <span className="birth-day-text"> <b>naman</b> and <b>3 ather friends</b>  have a birthday</span>
        </div>
        <img src={adds} alt="" className="right-bar-adds" />
        <h4 className="right-bar-titles">Online friends</h4>
        <ul className="right-bar-friends-list">
          {Users.map(u => (<Online key={u.id} user={u} />))}
        </ul>
      </>
    )
  }

  const Profile = () => {
    return (
      <>
        <h2 className="user-info-title">User information</h2>
        <div className="right-bar-info">
          <div className="right-bar-info-item">
          <span className="right-bar-info-key">City :</span>
          <span className="right-bar-info-value">Bangaluru</span>
        </div>
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">From :</span>
          <span className="right-bar-info-value">j p nagar</span>
        </div>
        <div className="right-bar-info-item">
          <span className="right-bar-info-key">Relationship:</span>
          <span className="right-bar-info-value">single</span>
        </div>
        </div>

        <h2 className="user-info-title">User friends</h2>
      <div className="right-bar-followings">
        <div className="right-bar-following">
          <img src={friend1} alt="" className="right-bar-following-img" />
          <span className="right-bar-following-name">naman</span>
        </div>

        <div className="right-bar-following">
          <img src={friend1} alt="" className="right-bar-following-img" />
          <span className="right-bar-following-name">naman</span>
        </div>
        <div className="right-bar-following">
          <img src={friend1} alt="" className="right-bar-following-img" />
          <span className="right-bar-following-name">naman</span>
        </div>

        <div className="right-bar-following">
          <img src={friend2} alt="" className="right-bar-following-img" />
          <span className="right-bar-following-name">naman</span>
        </div>

        <div className="right-bar-following">
          <img src={friend3} alt="" className="right-bar-following-img" />
          <span className="right-bar-following-name">naman</span>
        </div>

        <div className="right-bar-following">
          <img src={friend4} alt="" className="right-bar-following-img" />
          <span className="right-bar-following-name">naman</span>
        </div>

        <div className="right-bar-following">
          <img src={friend5} alt="" className="right-bar-following-img" />
          <span className="right-bar-following-name">naman</span>
        </div>

        <div className="right-bar-following">
          <img src={friend6} alt="" className="right-bar-following-img" />
          <span className="right-bar-following-name">naman</span>
        </div>
      </div>
      </>
    )
  }
  return (
    <div className='right'>
      <div className="right-bar-wrapper">

        {profile?<Profile/>:<HomePage/>}
        
      </div>
    </div>
  )
}
