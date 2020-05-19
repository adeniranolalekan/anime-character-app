import React, {useEffect} from "react";
import Group from "./Group";
import {connect} from "react-redux";

import {fetchCharacters, fetchSelectedAnime, fetchTopAnimes, selectAnime} from "./actions/apiActions";

const AnimeArea =({match,selectedAnime,fetchSelectedAnime,fetchCharacters})=>{

    useEffect(()=>{
        async  function fetchAnimeProperties(){
            const id=match.params.id

            await fetchSelectedAnime(id)
            await fetchCharacters(id)
        }
        fetchAnimeProperties()


    },[])
    return <div className="AnimeArea">
        <div className="AnimeDetails">
            <img src={selectedAnime.image_url} className="AnimeDetailsPoster"></img>
            <div className="AnimeTitle" >
                <h1>{selectedAnime.title}</h1>
            </div>
            <div className="AnimeSynopsis">
                <h2>Synopsis</h2>
                <p>{selectedAnime.synopsis}</p>
            </div>
            <div className="AnimeInformation">
                <h2>Information</h2>
                <div>
                    <h6>Rank: {selectedAnime.title}</h6>
                    <h6>Url: {selectedAnime.url}</h6>
                    <h6>Episodes: {selectedAnime.episodes}</h6>
                    <h6>Start Date: {selectedAnime.start_date}</h6>
                    <h6>End  Date: {selectedAnime.end_date}</h6>
                    <h6>Members: {selectedAnime.members}</h6>
                    <h6>Score: {selectedAnime.score}</h6>
                </div>
            </div>
            <Group classname="AnimeCharacters">
                <h2>Characters</h2>

            </Group>
        </div>


    </div>
}

function mapStateToProps({isloading,selectedAnime}) {
    return{ isloading,selectedAnime};
}
export default connect(mapStateToProps,{fetchSelectedAnime,fetchCharacters})(AnimeArea)