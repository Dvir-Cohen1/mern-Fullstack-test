import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8001/",
  headers: { "Content-Type": "application/json" },
});

const getAll = async () => {
  try {
    const {data} = await api.post("/getAll");
    return data;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const addOne = async (title, imageUrl) => {
  try {
    console.log(title, imageUrl);

    const response = await api.post("/addOne", { title, imageUrl });
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const removeOne = async (dataId) => {
  try {
    const response = await api.delete("/removeOne", { dataId });
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const mainService = { getAll, addOne, removeOne };
export default mainService;
