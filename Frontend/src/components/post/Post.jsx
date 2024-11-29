import React from 'react'
import './Post.css'
import image8 from "../../assets/person/8.jpeg"
import post1 from "../../assets/post/1.jpeg"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import heart from "../../assets/heart.png"
import like from "../../assets/like.png"



export default function Post() {
    return (
        <div className='post'>
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <img src={image8} alt="" className='post-profile' />
                        <span className="post-profile-name">Alina sabast</span>
                        <span className="post-profile-data">5 min ago</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-center-text">hey i am using this page</span>
                    <img src={post1} alt="" className='post-center-image' />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src={like} alt="" className='post-bottom-left-like-icon' />
                        <img src={heart} alt="" className='post-bottom-left-like-icon' />
                        <span className="post-like-counter">32 people like it</span>
                    </div>
                    <div className="post-bottom-right">
                        <div className="post-comment-text">10 comments</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
