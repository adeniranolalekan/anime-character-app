import React, {useEffect} from "react";
import Group from "./Group";
import {connect} from "react-redux";

import {fetchTopAnimes} from "./actions/apiActions";

const AnimeArea =({match,animes,selectedAnime})=>{

    useEffect(()=>{
      const id=match.params.id
       console.log("id is:",id)
    },[])
    return <div>
        <div className="AnimeDetails">
            <div className="AnimeDetailsPoster"></div>
        </div>
        <Group>

        </Group>

    </div>
}

function mapStateToProps({isloading,animes,selectedAnime}) {
    return{ isloading,animes,selectedAnime};
}
export default connect(mapStateToProps,null)(AnimeArea)