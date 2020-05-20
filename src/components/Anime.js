import React from "react";
import {Link} from "react-router-dom";

const Anime=({anime})=>{
    const{title,image_url,score}=anime;

    return <Link to={`/anime/${anime.mal_id}`}><div className="Anime" data-anime={anime} >
        <img src={image_url} alt={title} className="Poster"/>
        <div className="anime_details">
            <p className="Title">{title}</p>
            <p className="Score">Score: {score}</p>
        </div>
    </div></Link>
}

export default Anime;