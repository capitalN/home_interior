import {GET_PRODUCT,GET_PRODUCT_SUCCESS,GET_PRODUCT_LOADING,GET_PRODUCT_ERROR} from './Product.type.js';
import { getProductbyAPI } from './Product.API.js';


export const GetProduct = () =>async (dispatch) =>{
 
       dispatch({type:GET_PRODUCT_LOADING})
       try{
        let data =await getProductbyAPI()
        console.log(data)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:data})
       }
       catch(err){
           dispatch({type:GET_PRODUCT_ERROR,payload:err.message})
       }
}