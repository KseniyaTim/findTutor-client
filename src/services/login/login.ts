// axios
import type { AxiosInstance } from "axios";
import { createAxiosInstance } from "../../config/axiosInstance";

const axiosInstanceNoToken: AxiosInstance = createAxiosInstance({
    serviceBaseUrl: 'localhost:3000', // TODO: Need to be env variable
    prefix: "/login",
    isTokenRequired: false
});

// TODO: Need to add return types and logs
export default {
    login: async (password: string, email: string) => {
        try {
            const { data } = await axiosInstanceNoToken.post("/login")
            return data
        }
        catch (err: any) {
            throw err
        }
    },
    forgotPassword: async (email: string) => {
        try {
            const { data } = await axiosInstanceNoToken.post("/forgot-password")
            return data
        }
        catch (err: any) {
            throw err
        }

    },
    restorationCode: async (code: string) => {
        try {
            const { data } = await axiosInstanceNoToken.post("/restoration-code")
            return data
        }
        catch (err: any) {
            throw err
        }
    },
    resetPassword: async (password: string) => {
        try {
            const { data } = await axiosInstanceNoToken.post("/reset-password")
            return data
        }
        catch (err: any) {
            throw err
        }
    }
};
