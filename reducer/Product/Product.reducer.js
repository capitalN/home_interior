
import {GET_PRODUCT,GET_PRODUCT_SUCCESS,GET_PRODUCT_LOADING,GET_PRODUCT_ERROR} from './Product.type.js';


let initialData = {
    loading:false,
    error:false,
    Data:[]
}

export const ProductReducer = (state=initialData,{type,payload}) => {
    switch(type){
        case  GET_PRODUCT_LOADING :{
            return{
              ...state,
              loading:true,
              error:'',
              Data:[]
            }
        }

        case GET_PRODUCT_SUCCESS : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

        case GET_PRODUCT_ERROR : {
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