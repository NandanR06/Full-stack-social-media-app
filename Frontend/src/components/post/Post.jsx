import React, { useEffect, useState } from 'react'
import './Post.css'
import image8 from "../../assets/person/8.jpeg"
import post1 from "../../assets/post/1.jpeg"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import heart from "../../assets/heart.png"
import likeimg from "../../assets/like.png"
import { Users } from './dummyData';
import axios from "axios"
import { format } from "timeago.js"
import { Link } from 'react-router-dom';



export default function Post({ post }) {

    const pf = import.meta.env.VITE_APP_URL
    const url = 'http://localhost:5000';
    const [like, setLike] = useState(post.likes.length)
    const [isLike, setIsLike] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            await axios.get(`${url}/api/user/${post.userID}`)
                .then(res => {
                    setUser(res.data);
                }).catch(err => {
                    console.log(err.message);
                })
        }
        fetchPost();
    }, []);


    const setLikeinfo = () => {
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)

    }
    const data = Users.filter(u => (u.id === post.userId))
    return (
        <div className='post'>
            <div className="post-wrapper">
                <div className="post-top">
                    <div className="post-top-left">
                        <Link to={`/profile/${user.userName}`}>
                            <img src={user.profilePicture || `${pf}profile.webp`} alt="" className='post-profile' />
                        </Link>
                        <span className="post-profile-name">{user.userName}</span>
                        <span className="post-profile-data">{format(post.createdAt)}</span>
                    </div>
                    <div className="post-top-right">
                        <MoreVertIcon />
                    </div>
                </div>
                <div className="post-center">
                    <span className="post-center-text">{post?.desc}</span>
                    <img src={`${pf}${post.img}`} alt="" className='post-center-image' />
                </div>
                <div className="post-bottom">
                    <div className="post-bottom-left">
                        <img src={likeimg} alt="" className='post-bottom-left-like-icon' onClick={setLikeinfo} />
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
