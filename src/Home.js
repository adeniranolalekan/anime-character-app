import React, {useEffect} from "react";
import './Home.css';
import Group from "./Group";
import Anime from "./Anime";
import {connect} from "react-redux";

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
        <input id="id_filter" maxLength="254" name="filter-key"  />
        <button type="submit" name="search" className="btn" value='Sign Up'>Go</button>
        <Group>
            {animes.map(animeItem=><Anime anime={animeItem} key={animeItem.mal_id}/> )}
        </Group>
    </div>;

}
function mapStateToProps({animes}) {
return{ animes};
}
export default connect(mapStateToProps,{fetchTopAnimes})(Home)