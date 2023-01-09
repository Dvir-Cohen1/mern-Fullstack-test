import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:8001/",
  headers: { "Content-Type": "application/json" },
});

const getAll = async () => {
  try {
    const response = await api.post("/");
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const addOne = async (title, imageUrl) => {
  try {
    const response = await api.post("/addOne", { title, imageUrl });
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const removeOne = async (dataId) => {
  try {
    const response = await api.post("/removeOne", { dataId });
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
};

const mainService = { getAll, addOne, removeOne };
export default mainService;
