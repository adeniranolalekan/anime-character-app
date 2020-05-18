import {applyMiddleware, createStore} from "redux";
import reducer from "../reducers"
import logger from "redux-logger"
import thunk from "redux-thunk"
/*const logger=(store)=>(next)=>(action)=>{
    console.log("action fired",action);
    next(action);
}*/
const error =(store)=>(next)=>(action)=>{
    try{
        next(action)
    }catch (e) {
        console.log("Error: ",e)
    }
}
const middleware=applyMiddleware(thunk,logger,error)
const store= createStore(reducer,middleware);

export default store