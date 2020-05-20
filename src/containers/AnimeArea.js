import React, {useEffect} from "react";
import Group from "../components/Group";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Character from "../components/Character"

import {fetchCharacters, fetchSelectedAnime} from "../actions/apiActions";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Loader from "react-loader-spinner";

const AnimeArea =({match,isloading,selectedAnime,characters,fetchSelectedAnime,fetchCharacters})=>{

    useEffect(()=>{
        async  function fetchAnimeProperties(){
            const id=match.params.id

            await fetchSelectedAnime(id)
            await fetchCharacters(id)
        }
        fetchAnimeProperties()


    },[])
    return <div className="AnimeArea">
        <div className="Header">

            <Link to={`/`}><FontAwesomeIcon className="CheveronRight" icon={faChevronLeft}/> Back to home</Link>
        </div>
        <div className="AnimeDetails">
            <img src={selectedAnime.image_url} alt={selectedAnime.title} className="AnimeDetailsPoster"></img>
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
            <div className="AnimeCharacters">
                <h2>Characters</h2>
            <Group >

                {isloading?<Loader type="Oval" color={"#00BFFF"}  height={100} width={100} timeout={3000}/>
                    :characters.map(characterItem=><Character character={characterItem} key={characterItem.mal_id}/> )}
            </Group>
            </div>
        </div>


    </div>
}

function mapStateToProps({isloading,selectedAnime,characters}) {
    return{ isloading,selectedAnime,characters};
}
export default connect(mapStateToProps,{fetchSelectedAnime,fetchCharacters})(AnimeArea)