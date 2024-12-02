import React from 'react'
import "./Feed.css"
import Shere from '../share/Shere'
import Post from '../post/Post'
import Posts from "../post/dummyData"

export default function Feed() {
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Shere/>
        {Posts.map(p =>(<Post key={p.id}  post ={p}/>))}
        
        
      </div>
    </div>
  )
}
