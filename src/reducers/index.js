import animes from "./animes"
import characters from "./characters";
import {combineReducers} from "redux";
import isloading from "./isloading";
import selectedAnime from "./selectedAnime";
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";

const rootReducer= combineReducers({
    isloading,
    animes,
    characters,
});

const persistConfig={
    key:"animeApp",
    storage
};
const persistedReducer=persistReducer(persistConfig,rootReducer)

export default persistedReducer
