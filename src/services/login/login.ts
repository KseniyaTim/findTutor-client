// axios
import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axiosInstance";

const axiosInstanceNoToken: AxiosInstance = createAxiosInstance({
    serviceBaseUrl: 'localhost:3000',
    prefix: "/login",
    isTokenRequired: false
});

export default {
    login: async () => {
        const { data } = await axiosInstanceNoToken.get("/")
        return data
    },

};
