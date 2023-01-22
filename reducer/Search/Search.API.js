import axios from "axios";

export const getSearchbyAPI = async () => {
      
       let res = await axios.get('http://localhost:4040/furniture')
       return res.data;
}


// export const getProductIdbyAPI = async (id) => {
//        let res = await axios.get(`http://localhost:4040/furniture/${id}`)
//        return res;
// }