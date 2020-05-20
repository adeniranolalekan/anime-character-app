import {
     FETCH_ANIMES_REQUESTED,
    FETCH_ANIMES_SUCCEEDED,
    FETCH_ANIMES_FAILED,
    ANIME_SELECTED,
    FETCH_SELECTED_ANIME_REQUESTED,
    FETCH_SELECTED_ANIME_FAILED,
    FETCH_CHARACTERS_REQUESTED, FETCH_CHARACTERS_SUCCEEDED, FETCH_SELECTED_ANIME_SUCCEEDED,
} from "../constants/actionTypes";
import axios from "axios";

axios.defaults.baseURL="https://api.jikan.moe/v3";

axios.defaults.headers.common["Content-Type"]="application/json";

export const fetchTopAnimes = () => async dispatch => {
    dispatch({type: FETCH_ANIMES_REQUESTED})
    // make actual request

    axios.request({
        url:"/top/anime",
        method:"GET",

    }).then(({data}) => {
        dispatch(setAnimes(data));
    }).catch(error => {
       dispatch({type: FETCH_ANIMES_FAILED,
                payload: [],});
    });
}
export const fetchSelectedAnime = (id) => async dispatch => {
    dispatch({type: FETCH_SELECTED_ANIME_REQUESTED})
    // make actual request

    axios.request({
        url:`/anime/${id}`,
        method:"GET",

    }).then(({data}) => {
        dispatch(setSelectedAnime(data));
    }).catch(error => {
        dispatch({type: FETCH_SELECTED_ANIME_FAILED,
            payload: [],});
    });
}
export const fetchCharacters = (id) => async dispatch => {
    dispatch({type: FETCH_CHARACTERS_REQUESTED})
    // make actual request

    axios.request({
        url:`/anime/${id}/characters_staff`,
        method:"GET",

    }).then(({data}) => {
        dispatch(setCharacters(data));
    }).catch(error => {
        dispatch({type: FETCH_CHARACTERS_SUCCEEDED,
            payload: [],});
    });
}
function setAnimes(animes) {
    console.log(animes);
    return{type: FETCH_ANIMES_SUCCEEDED,
        payload: animes || [],};

}
function setSelectedAnime(anime) {

    return{type: FETCH_SELECTED_ANIME_SUCCEEDED,
        payload: anime || [],};

}
function setCharacters(characters) {

    return{type: FETCH_CHARACTERS_SUCCEEDED,
        payload: characters|| [],};

}
