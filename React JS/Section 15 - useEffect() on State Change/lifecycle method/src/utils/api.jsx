import axios from "axios";

// export { axios };

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default instance;
