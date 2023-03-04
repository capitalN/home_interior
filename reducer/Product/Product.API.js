import axios from "axios";

export const getProduct_by_API = async () => {
  let res = await axios.get("https://home-interior.onrender.com/furniture");
  return res.data;
};

export const getProductbyAPI = async (str, page = 1) => {
  let res = await axios.get("https://home-interior.onrender.com/furniture");
  let data = res.data.filter((ele) => ele.type === str);

  let myData = [];
  if (data.length) {
    for (let i = 0 + page; i < 6 + page; i++) {
      myData.push(data[i]);
    }
  }
  return myData;
};

export const getProductIdbyAPI = async (id) => {
  let res = await axios.get(
    `https://home-interior.onrender.com/furniture/${id}`
  );
  return res;
};
