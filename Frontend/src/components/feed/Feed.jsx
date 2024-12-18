import React, { useEffect, useState } from 'react'
import "./Feed.css"
import Shere from '../share/Shere'
import Post from '../post/Post'
import Posts from "../post/dummyData"
import axios from 'axios'

export default function Feed({userName}) {
  
  //  http://localhost:5000/api/posts/profile/Nandan R
  
  const url = 'http://localhost:5000';

  const [posts, setPosts] = useState([]);

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
        await axios.get(`${url}/api/posts/timeline/6743192a69215316f510b30a`)
        .then(res => {
          setPosts(res.data);  
        }).catch(err => {
          console.log(err.message);
        })
       }   
    }
    fetchPost();
  }, [userName]);
  
  return (
    <div className='feed'>
      <div className="feed-wrapper">
        <Shere />
        {posts.map(p => (<Post key={p._id} post={p} />))}
      </div>
    </div>
  )
}
