import axios from "axios";
import {API} from "../constants/actionTypes";
import {apiStart,apiEnd} from "../actions/apiActions";
//axios default config

axios.defaults.baseURL="https://api.jikan.moe/v3";

axios.defaults.headers.common["Content-Type"]="application/json";

axios.defaults.headers.common["Authorization"]=`Bearer xxxx`;

//actual middleware implementation
const api = ({dispatch})=>next=>action=>{
    next(action);
    if(action.type!==API) return;

    const {url, method, data, onSuccess, onFailure, label}=action.payload;
    const dataOrParams=["GET","DELETE"].includes(method) ? "params": "data";

    //  announce the initiation of api request
    if(label){
        dispatch(apiStart(label));
    }
    // make actual request
    axios.request({
        url,
        method,
        [dataOrParams]:data
    }).then(({data})=>{
        dispatch(onSuccess(data));
    }).catch(error=>{
        dispatch(onFailure(error));
    }).finally(()=>{
        //announce the end of the api request
        if(label){
            dispatch(apiEnd(label))
        }
    });
};