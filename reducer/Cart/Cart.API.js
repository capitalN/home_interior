// import axios from "axios"
// import { url } from "./Cart.url"


// export const getdata = async()=>{
//     try{
//          let data = await axios.get(`${url}`);
//          return data;
//     }
//     catch(err){
//         console.log("Error:",err)
//     }
// }


// export const getDataPost = async (product)=>{
//     console.log(product)
//     try{
//         let data = await axios.post(`${url}`,
//         product);
//         console.log(data,"this is data")
//         return data;
//     }
//     catch(err){
//         console.log("Error:",err);
//     }
// }

// export const getDataPatch =  async (id,a)=>{
//     try{
//         let data = await axios.patch(`${url+id}`,
//         { count: a });
//         return data;
//     }
//     catch(err){
//         console.log("Error:",err);
//     }
// }


// export const getDatadelete = async (id)=>{
//     try{
//         let data = await axios.delete(`${url+id}`);
//         return data;
//     }
//     catch(err){
//         console.log("Error:",err);
//     }
// }