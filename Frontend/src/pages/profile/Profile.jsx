import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import './Profile.css'
import coverImg from "../../assets/post/3.jpeg"
import profile from "../../assets/person/1.jpeg"
import axios from 'axios'
import { useParams } from 'react-router'

export default function Profile() {
  const url = 'http://localhost:5000';
  const pf = import.meta.env.VITE_APP_URL
  const userName = useParams().username;
  
  const [user, setUser] = useState({});

  useEffect(() => {

    const fetchUser = async () => await axios
      .get(`${url}/api/user?userName=${userName}`)
      .then(res => { 
        setUser(res.data)
        
      })
  
      .catch (err => console.log(err.message)
      )
  fetchUser();

}, [userName]);


return (
  <div>
    <Navbar />
    <div className="profile">
      <Leftbar />
      <div className="profile-right">
        <div className="profile-right-top">
          <div className="profile-cover">
            <img src={user.coverPicture || `${pf}cover.jpg` } alt="" className="profile-cover-img" />
            <img src={user.profilePicture || `${pf}profile.webp` } alt="" className="profile-user-img" />
          </div>
          <div className="profile-info">
            <h4 className="profile-info-Name">{user.userName}</h4>
            <span className="profile-info-desc">{user.desc || "Hi  Iam In readNote"}</span>
          </div>
        </div>
        <div className="profile-right-bottom">
          <Feed userName = {userName} />
          <Rightbar user={user} />
        </div>
      </div>

    </div>
  </div>
)
}
