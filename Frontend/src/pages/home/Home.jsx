import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="hame-content">
        <Leftbar/>
        <Feed/>
        <Rightbar/>
      </div>
    </div>
  )
}
