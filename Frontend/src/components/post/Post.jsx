import React, { useState } from 'react'
import './Post.css'
import image8 from "../../assets/person/8.jpeg"
import post1 from "../../assets/post/1.jpeg"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import heart from "../../assets/heart.png"
import likeimg from "../../assets/like.png"
import { Users } from './dummyData';



export default function Post({ post }) {

    const [like,setLike] = useState(post.like)
    const [isLike,setIsLike] = useState(false);

    const setLikeinfo =()=>{
        setLike(isLike?like-1:like+1)
        setIsLike(!isLike)

    }
    const data = Users.filter(u => (u.id === post.userId))
    return (
        <div className='post'>
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={data[0].profilePicture} alt="" className='post-profile' />
                        <span className="post-profile-name">{data[0].username}</span>
                        <span className="post-profile-data">{post.date}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-center-text">{post?.desc}</span>
                    <img src={post.photo} alt="" className='post-center-image' />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src={likeimg} alt="" className='post-bottom-left-like-icon'  onClick={setLikeinfo}/>
                        <img src={heart} alt="" className='post-bottom-left-like-icon' onClick={setLikeinfo} />
                        <span className="post-like-counter">{like} people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <div className="post-comment-text">{post.comment} comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
