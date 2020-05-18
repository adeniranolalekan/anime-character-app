import {API_END,API_START,FETCH_ANIMES,API,
    FETCH_ANIMES_REQUESTED,
    FETCH_ANIMES_SUCCEEDED,
    FETCH_ANIMES_FAILED,} from "../constants/actionTypes";
import {noOp} from "../utils/appUtils"
import axios from "axios";

axios.defaults.baseURL="https://api.jikan.moe/v3";

axios.defaults.headers.common["Content-Type"]="application/json";

export const apiStart=value=>({
    type:API_START,
    payload:FETCH_ANIMES
})

export const apiEnd=value=>({
    type:API_END,
    payload:FETCH_ANIMES
})

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
function setAnimes(animes) {
    console.log(animes);
    return{type: FETCH_ANIMES_SUCCEEDED,
        payload: animes || [],};

}