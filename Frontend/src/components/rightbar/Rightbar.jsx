import React from 'react'
import "./Rightbar.css"
import gift from '../../assets/gift.png'
import adds from "../../assets/ad.png"
import Online from '../online/Online'
import {Users}from "../../components/post/dummyData"


export default function Rightbar() {
  return (
    <div className='right'>
      <div className="right-bar-wrapper">
        <div className="birthday-container">
          <img src={gift} alt="" className="birth-day-img" />
          <span className="birth-day-text"> <b>nandan</b> and <b>3 ather friends</b>  have a birthday</span>
        </div>
        <img src={adds} alt="" className="right-bar-adds" />
        <h4 className="right-bar-titles">Online friends</h4>
        <ul className="right-bar-friends-list">
         {Users.map(u=>(<Online key={u.id} user = {u}/>))}
        </ul>
      </div>
    </div>
  )
}
