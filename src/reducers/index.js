import animes from "./animes"
import characters from "./characters";
import {combineReducers} from "redux";
import isloading from "./isloading";

export default combineReducers({
    isloading,
    animes,
    characters,
});