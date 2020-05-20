import { FETCH_ANIMES_SUCCEEDED} from "../constants/actionTypes";

export default function animes(state=[],action){
    switch (action.type) {
        case FETCH_ANIMES_SUCCEEDED:
            return  action.payload.top;
        default:
            return state;
    }
}