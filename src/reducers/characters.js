
import { FETCH_CHARACTERS_SUCCEEDED} from "../constants/actionTypes";

export default function characters(state=[], action){
    switch (action.type) {
        case FETCH_CHARACTERS_SUCCEEDED:
            return  action.payload.characters;
        default:
            return state;
    }
}