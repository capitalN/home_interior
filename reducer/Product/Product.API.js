import axios from "axios";

export const getProduct_by_API = async () => {
       let res = await axios.get('http://localhost:4040/furniture')

       return res.data;
}



export const getProductbyAPI = async (str) => {
       let res = await axios.get('http://localhost:4040/furniture')
       let data = res.data.filter((ele)=> ele.type === str)
       return data;
}


export const getProductIdbyAPI = async (id) => {
       let res = await axios.get(`https://home-interior.onrender.com/furniture/${id}`)
       return res;
}


