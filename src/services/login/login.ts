// axios
import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axiosInstance";

const axiosInstanceNoToken: AxiosInstance = createAxiosInstance({
    serviceBaseUrl: 'localhost:3000',
    prefix: "/login",
    isTokenRequired: false
});

export default {
    login: async (password: string, email: string) => {
        const { data } = await axiosInstanceNoToken.get("/")
        return data
    },
    forgotPassword: async (email: string) => {
        const { data } = await axiosInstanceNoToken.get("/")
        return data
    },
    restorationCode: async (code: string) => {
        const { data } = await axiosInstanceNoToken.get("/")
        return data
    },


};
