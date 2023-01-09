import axios from "axios";
const api = axios.create({
     baseURL: "http://localhost:8001/",
     headers: { "Content-Type": "application/json" },
});

const addOne = async (title, imageUrl) => {
     try {
          const response = await api.post("/addOne", { data: { title, imageUrl } });
          return response;
     } catch (error) {
          console.log(error)
          return Promise.reject(error);
     }
};

const mainService = { addOne };
export default mainService;
