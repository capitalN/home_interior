import axios from "axios";

export const getProductbyAPI = async () => {
      
       let res = await axios.get('http://localhost:4040/furniture')
       return res.data;
}