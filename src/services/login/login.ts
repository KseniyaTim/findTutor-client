// axios
import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axiosInstance";

const axiosInstanceNoToken: AxiosInstance = createAxiosInstance({
    serviceBaseUrl: process.env.REACT_APP_BACKEND_URL!,
    prefix: "/login",
    isTokenRequired: false
});

export default {
    login: async () => {
            const { data } = await axiosInstanceNoToken.get("/")
            return data
    },

};
