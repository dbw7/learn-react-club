import React from "react";
import "./ProfilePic.css"

const ProfilePic = (props) => {
    
    return (
        <>
            <img className="img" src={props.image}></img>
        </>
    )
    
}

export default ProfilePic