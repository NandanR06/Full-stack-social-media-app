import React from 'react'
import "./Feed.css"
import Shere from '../share/Shere'
import Post from '../post/Post'

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Shere/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  )
}
