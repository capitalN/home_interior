import axios from "axios";

export const getProduct_by_API = async () => {
  let res = await axios.get("https://home-interior.onrender.com/furniture");
  return res.data;
};

export const getProductbyAPI = async (param, page = 1) => {
  console.log("ByAPI==>", param);

  let res = await axios.get(`https://home-interior.onrender.com/furniture/`, {
    params: {
      type: param.product,
      prints: param.prints,
      _sort: "price",
      _order: param.sort,
      _page: page,
      _limit: 6,
    },
  });
  let data = res.data;

  if (param.price) {
    let limit = param.price.split("-").map(Number);
    console.log(limit[0], limit[1]);
    if (limit[1] === undefined) {
      data = data.filter((ele) => ele.price >= limit[0]);
    } else {
      data = data.filter(
        (ele) => ele.price >= limit[0] && ele.price <= limit[1]
      );
    }
  }
  return data;
};

export const getProductIdbyAPI = async (id) => {
  let res = await axios.get(
    `https://home-interior.onrender.com/furniture/${id}`
  );
  return res;
};
