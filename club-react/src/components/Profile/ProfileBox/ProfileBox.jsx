import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import ProfilePic from "../ProfilePic/ProfilePic";
import "./ProfileBox.css"

const ProfileBox = (props) => {
    return (
        <div className="profile-box">
            <ProfilePic image={props.image}></ProfilePic>
            <ProfileInfo name={props.name} bio={props.bio}></ProfileInfo>
        </div>
    )
}

export default ProfileBox