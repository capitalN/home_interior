import {GET_SEARCH,GET_SEARCH_SUCCESS,GET_SEARCH_LOADING,GET_SEARCH_ERROR} from './Search.type.js';
import { getSearchbyAPI } from './Search.API.js';


export const GetProduct = () =>async (dispatch) =>{
 
       dispatch({type:GET_SEARCH_LOADING})
       try{
        let data =await getSearchbyAPI()
        dispatch({type:GET_SEARCH_SUCCESS,payload:data})
       }
       catch(err){
           dispatch({type:GET_SEARCH_ERROR,payload:err.message})
       }
}