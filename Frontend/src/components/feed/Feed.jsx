import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Shere from '../share/Shere'
import Post from '../post/Post'
import Posts from "../post/dummyData"
import axios from 'axios'

export default function Feed() {
  const url = 'http://localhost:5000';

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      await axios.get(`${url}/api/posts/timeline/6743192a69215316f510b30a`)
        .then(res => {

          setPosts(res.data); 
        }).catch(err => {
          console.log(err.message);
        })
    }
    fetchPost();
  }, []);
  
  

  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Shere />
        {posts.map(p => (<Post key={p._id} post={p} />))}
      </div>
    </div>
  )
}
