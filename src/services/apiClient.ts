import axios from "axios";

const endPoint = import.meta.env.VITE_ENDPOINT
export default axios.create({
    baseURL: endPoint,
});