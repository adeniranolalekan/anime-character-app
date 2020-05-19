import { FETCH_SELECTED_ANIME_SUCCEEDED} from "../constants/actionTypes";

export default function selectedAnime(state= {},action) {
    switch (action.type) {
        case FETCH_SELECTED_ANIME_SUCCEEDED:
            return  action.payload;
        default:
            return state;
    }

}