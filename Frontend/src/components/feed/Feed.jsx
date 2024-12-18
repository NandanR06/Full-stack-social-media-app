import React, { useContext, useEffect, useState } from 'react'
import "./Feed.css"
import Shere from '../share/Shere'
import Post from '../post/Post'
import Posts from "../post/dummyData"
import axios from 'axios'
import AuthContext from '../../context/AuthContext'

export default function Feed({userName}) {
  
  const url = 'http://localhost:5000';

  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext)

  useEffect(() => {
    const fetchPost = async () => {

      if(userName){
        await axios.get(`${url}/api/posts/profile/${userName}`)
        .then(res => {
          setPosts(res.data);  
        }).catch(err => {
          console.log(err.message);
        })
      }
       else{
        await axios.get(`${url}/api/posts/timeline/${user._id}`)
        .then(res => {
          setPosts(res.data);  
        }).catch(err => {
          console.log(err.message);
        })
       }   
    }
    fetchPost();
  }, [user._id]);
  
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Shere />
        {posts.map(p => (<Post key={p._id} post={p} />))}
      </div>
    </div>
  )
}
