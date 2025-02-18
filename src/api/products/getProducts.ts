import { AxiosError } from "axios";
import { api } from "../api";

const GetProducts = async () => {
    try {
        //console.log("queryKey in getAllproduct API:",queryKey);

        const response = await api.get(`/products`);
        console.log("Response from GetProducts API:", response.data.data);

        return response.data.data;
    } catch (error) {
        // Ensure error is typed correctly as AxiosError
        if (error instanceof AxiosError) {
            if (error.response) {
                console.error("Server Error:", error.response.data);
                throw new Error(error.response.data.message || "Server Error");
            } else if (error.request) {
                console.error("Network Error:", error.request);
                throw new Error("Network Error: No response received from the server");
            }
        }

        console.error("Unexpected Error:", (error as Error).message);
        throw new Error((error as Error).message || "An unknown error occurred");
    }
};

export default GetProducts;
