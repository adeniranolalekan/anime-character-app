import React from "react";

const Anime=({anime})=>{
    const{title,image_url,score}=anime;

    return <div className="Anime">
        <img src={image_url} alt={title} className="Poster"/>
        <div className="anime_details">
            <p className="Title">{title}</p>
            <p className="Score">Score: {score}</p>
        </div>
    </div>
}

export default Anime;