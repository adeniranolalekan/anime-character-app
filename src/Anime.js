import React from "react";

const Anime=({anime})=>{
    const{title,image_url,score}=anime;

    return <div className="Anime">
        <img src={image_url} alt={title} className="anime_image"/>
        <div className="anime_details">
            <p className="anime_details_title">{title}</p>
            <p className="anime_details_score">{score}</p>
        </div>
    </div>
}

export default Anime;