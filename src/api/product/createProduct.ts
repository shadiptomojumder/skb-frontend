import { Product } from "@/interfaces/product.schemas";
import { AxiosResponse } from "axios";
import { api } from "../api";

// Define the expected response type
interface CreateProductResponse {
    success: boolean;
    data: Product;
    message: string;
    statusCode: number;
}

const CreateProduct = async (data: Product): Promise<CreateProductResponse> => {
    console.log("The Data in CreateProduct API is:", data);

    try {
        const response: AxiosResponse<CreateProductResponse> =
            await api.post<CreateProductResponse>(`/product/create`, data);
        console.log("Response in CreateProduct.ts file: ", response);

        return response.data;
    } catch (error: any) {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error("Server Error:", error.response.data);
            throw new Error(error.response.data.message || "Server Error");
        } else if (error.request) {
            // Request was made but no response received
            console.error("Network Error:", error.request);
            throw new Error("Network Error: No response received from the server");
        } else {
            // Something else happened while setting up the request
            console.error("Error:", error.message);
            throw new Error(error.message || "An unknown error occurred");
        }
    }
};

export default CreateProduct;
