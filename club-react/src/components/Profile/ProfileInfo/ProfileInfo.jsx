import React from "react";
import "./ProfileInfo.css"

const ProfileInfo = (props) => {
    return (
        <div className="profile-info">
            <h1>{props.name}</h1>
            <p>{props.bio}</p>
        </div>
    )
}

export default ProfileInfo