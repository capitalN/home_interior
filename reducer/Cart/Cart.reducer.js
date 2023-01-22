import { CART_ERROR, CART_LOADING, DELETE_CART_SUCCESS, DELETE_CART_SUCCESS_RECENTLY_VIEW, DELETE_CART_SUCCESS_WISHLIST, GET_CART_SUCCESS, GET_CART_SUCCESS_RECENTLY_VIEW, GET_CART_SUCCESS_WISHLIST, PATCH_DATA, POST_CART_SUCCESS, POST_CART_SUCCESS_RECENTLY_VIEW, POST_CART_SUCCESS_WISHLIST } from "./Cart.actionTypes"


let initialData = {
    loading:false,
    error:false,
    Data:[]
}

export const CartReducer = (state=initialData,{type,payload}) => {
    switch(type){
        case  CART_LOADING :{
            return{
              ...state,
              loading:true,
              error:false,
            }
        }

        case CART_ERROR : {
            return{
                ...state,
                loading:false,
                error:true
              }
           }

        case GET_CART_SUCCESS : {
          console.log(payload)
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

           case POST_CART_SUCCESS : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

           case DELETE_CART_SUCCESS : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

           
        case GET_CART_SUCCESS_WISHLIST : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

           case POST_CART_SUCCESS_WISHLIST  : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

           case DELETE_CART_SUCCESS_WISHLIST  : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }



           
        case GET_CART_SUCCESS_RECENTLY_VIEW : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

           case POST_CART_SUCCESS_RECENTLY_VIEW : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

           case DELETE_CART_SUCCESS_RECENTLY_VIEW : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

           case PATCH_DATA : {
            return{
                ...state,
                loading:false,
                error:false,
                Data:payload
              }
           }

      default:{
        return state
      }
    }
}