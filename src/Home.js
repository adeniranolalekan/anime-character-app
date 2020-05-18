import React, {useEffect} from "react";
import Group from "./Group";
import Anime from "./Anime";
import {connect} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";

import store from "./store";
import {fetchTopAnimes} from "./actions/apiActions";

const Home=({animes,fetchTopAnimes})=>{

  useEffect(()=>{
      async  function fetchAnimes(){
        await  fetchTopAnimes()
      }
      fetchAnimes()
  },[])
    return <div className="Home">
        <div className="Header">
            <input id="id_filter" className="Searchbox" maxLength="254" name="filter-key" placeholder="Search for anime" />
            <FontAwesomeIcon className="CheveronRight" icon={faChevronRight}/>
        </div>
        <Group>
            {animes.map(animeItem=><Anime anime={animeItem} key={animeItem.mal_id}/> )}
        </Group>
    </div>;

}
function mapStateToProps({animes}) {
return{ animes};
}
export default connect(mapStateToProps,{fetchTopAnimes})(Home)