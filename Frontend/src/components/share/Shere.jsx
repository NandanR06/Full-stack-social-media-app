import React, { useContext, useRef, useState } from "react";
import "./Shere.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import RoomIcon from "@mui/icons-material/Room";
import image4 from "../../assets/person/4.jpeg";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import CloseIcon from '@mui/icons-material/Close';

export default function Shere() {
  const { user } = useContext(AuthContext);
  const pf = import.meta.env.VITE_APP_URL;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const url = "http://localhost:5000";

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newpost = {
      userID: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const filename =file.name;
      data.append("file", file);
      data.append("name", filename);
      newpost.img = filename;

      try {
        await axios.post(`${url}/posts`,data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post(`${url}/api/posts`, newpost);
    } catch (error) {
      console.log(error)
    }
    window.location.reload()

  };
  return (
    <div className="shere">
      <div className="shere-wrap">
        <div className="shere-top">
          <img
           crossorigin="anonymous"
            src={user.userName?`${pf}profile.webp` : `${pf}${user.profilePicture}`}
            alt="profile"
            className="shere-profile-img"
          />
          <input
            type="text"
            placeholder={`whats in your mind ${user.userName} ? `}
            className="shere-profile-input"
            ref={desc}
          />
        </div>
        <hr className="Shere-hr" />

        {file && (
          <div className="shere-img-container">
            <img src={URL.createObjectURL(file)} alt="img"  className="share-img"/>
          <CloseIcon onClick={()=>{setFile(null)}} className="shere-cancle-img" />
          </div>
        )}
        <form className="shere-bottom" onSubmit={handleSubmit}>
          <div className="shere-options">
            <label htmlFor="file" className="shere-option">
              <PermMediaIcon htmlColor="tomato" className="shere-icon" />
              <span className="shere-option-text">photo or video</span>
              <input
                type="file"
                id="file"
                name="file"
                accept=".png,.jpeg,.jpg"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shere-option">
              <LabelIcon htmlColor="blue" className="shere-icon" />
              <span className="shere-option-text">Tap</span>
            </div>
            <div className="shere-option">
              <EmojiEmotionsIcon htmlColor="goldenrod" className="shere-icon" />
              <span className="shere-option-text">Feeling</span>
            </div>
            <div className="shere-option">
              <RoomIcon htmlColor="green" className="shere-icon" />
              <span className="shere-option-text">Location</span>
            </div>
          </div>
          <button className="shere-btn" type="submit">
            Shere
          </button>
        </form>
      </div>
    </div>
  );
}
