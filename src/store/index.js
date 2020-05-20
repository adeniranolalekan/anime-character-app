import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"
import {persistStore} from "redux-persist";

const error =()=>(next)=>(action)=>{
    try{
        next(action)
    }catch (e) {
        console.log("Error: ",e)
    }
}
const middleware=applyMiddleware(thunk,logger,error)
const store= createStore(reducer,middleware);
const persistedStore=persistStore(store);

export { persistedStore, store as default};