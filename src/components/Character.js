import {Link} from "react-router-dom";
import React from "react";

const Anime=({character})=>{
    const{name,image_url,role}=character;

    return <div className="Character"  >
        <img src={image_url} alt={name} className="Poster"/>
        <div className="anime_details">
            <p className="Title">{name}</p>
            <p className="Role">Role: {role}</p>
        </div>
    </div>
}

export default Anime;