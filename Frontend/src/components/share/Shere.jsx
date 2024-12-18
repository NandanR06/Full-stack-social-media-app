import React, { useContext } from "react";
import "./Shere.css";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import LabelIcon from "@mui/icons-material/Label";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import RoomIcon from "@mui/icons-material/Room";
import image4 from "../../assets/person/4.jpeg";
import AuthContext from "../../context/AuthContext";

export default function Shere() {
  const { user } = useContext(AuthContext);
  const pf = import.meta.env.VITE_APP_URL;
  const url = "http://localhost:5000";
  return (
    <div className="shere">
      <div className="shere-wrap">
        <div className="shere-top">
          <img src={user.username?`${pf}${user.profilePicture}`:`${pf}profile.webp`} alt="" className="shere-profile-img" />
          <input
            type="text"
            name=""
            placeholder={`whats in your mind ${user.userName} ? `}
            id=""
            className="shere-profile-input"
          />
        </div>
        <hr className="Shere-hr" />
        <div className="shere-bottom">
          <div className="shere-options">
            <div className="shere-option">
              <PermMediaIcon htmlColor="tomato" className="shere-icon" />
              <span className="shere-option-text">photo or video</span>
            </div>
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
          <button className="shere-btn">Shere</button>
        </div>
      </div>
    </div>
  );
}
