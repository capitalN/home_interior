
import {GET_SEARCH,GET_SEARCH_SUCCESS,GET_SEARCH_LOADING,GET_SEARCH_ERROR} from './Search.type.js';


let initialData = {
    loading:false,
    error:false,
    Data:[]
}

export const SearchReducer = (state=initialData,{type,payload}) => {
    switch(type){
        case  GET_SEARCH_LOADING :{
            return{
              ...state,
              loading:true,
              error:'',
              Data:[]
            }
        }

        case GET_SEARCH_SUCCESS : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

        case GET_SEARCH_ERROR : {
            return{
                ...state,
                loading:false,
                error:payload,
                Data:[]
              }
           }
      default:{
        return state
      }
    }
}