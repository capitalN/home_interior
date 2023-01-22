import axios from "axios";

export const getProductbyAPI = async () => {
      
       let res = await axios.get('https://home-interior.onrender.com/furniture')
       return res.data;
}


export const getProductIdbyAPI = async (id) => {
       let res = await axios.get(`https://home-interior.onrender.com/furniture/${id}`)
       return res;
}