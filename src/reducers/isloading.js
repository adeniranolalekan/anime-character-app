import {FETCH_ANIMES_REQUESTED, FETCH_CHARACTERS_REQUESTED} from "../constants/actionTypes";

export function isloading(state=false,action){
    if(action.type==FETCH_ANIMES_REQUESTED ||action.type==FETCH_CHARACTERS_REQUESTED){
        return true
    }
    return false
}
export default isloading