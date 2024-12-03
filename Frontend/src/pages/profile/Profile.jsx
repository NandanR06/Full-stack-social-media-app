import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './Profile.css'
import coverImg from "../../assets/post/3.jpeg"
import profile from "../../assets/person/1.jpeg"

export default function Profile() {
  return (
    <div>
      <Navbar />
      <div className="profile">
        <Leftbar />
        <div className="profile-right">
          <div className="profile-right-top">
            <div className="profile-cover">
              <img src={coverImg} alt="" className="profile-cover-img" />
              <img src={profile} alt="" className="profile-user-img" />
            </div>
            <div className="profile-info">
              <h4 className="profile-info-Name">Saried rteagerth</h4>
              <span className="profile-info-desc">hello wewjnk ertnek dnfkldn</span>
            </div>
          </div>
          <div className="profile-right-bottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>

      </div>
    </div>
  )
}
